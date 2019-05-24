import decodeDescriptor from './decodeDescriptor'
import { ProtoModules } from '../index'
import buildTxids from './buildTxids'

const ANY = ProtoModules.google.protobuf.Any
const OipDetails = ProtoModules.oipProto.OipDetails

const googleApis = 'type.googleapis.com/'

function serializeNameToTypeUrl (name, path) {
  let splitPath = path.split('.')
  if (splitPath[0] === '') {
    splitPath = splitPath.slice(1)
  }
  splitPath[splitPath.length - 1] = name
  splitPath = splitPath.join('.')
  return `${googleApis}${splitPath}`
}

const protoNumberFields = [
  'double',
  'float',
  'int32',
  'int64',
  'uint32',
  'uint64',
  'sint32',
  'sint64',
  'fixed32',
  'fixed64',
  'sfixed32',
  'sfixed64'
]

function typeConvBool (values) {
  if (Array.isArray(values)) {
    let newArray = []
    for (let field of values) {
      newArray.push(field === 'true')
    }
    return newArray
  } else {
    return values === 'true'
  }
}

function typeConvNumber (values) {
  if (Array.isArray(values)) {
    let newArray = []
    for (let field of values) {
      newArray.push(Number(field))
    }
    return newArray
  } else {
    return Number(values)
  }
}

function typeConvBytes (values) {
  if (Array.isArray(values)) {
    let newArray = []
    for (let field of values) {
      newArray.push(Buffer.from(field))
    }
    return newArray
  } else {
    return Buffer.from(values)
  }
}

/**
 * Create OipDetails Proto message
 * @param data
 * @param data.name - template name
 * @param data.payload - template object information (fields with assigned values)
 * @param [data.descriptor] - the file descriptor that defines the template being used for the payload
 * @param [data.type] - protobuf Type class to build the messages
 * @returns {oipProto.OipDetails}
 */
export default function buildOipDetails (data) {
  if (!Array.isArray(data)) {
    data = [data]
  }

  let details = []

  for (let item of data) {
    const {
      name,
      payload,
      descriptor,
      type
    } = item
    if (!name || name === '') {
      throw Error(`Must provide defined name. Received: ${name}`)
    }
    if (!payload) {
      throw Error(`Must provide payload object to create message from`)
    }
    if (!type && !descriptor) {
      throw Error(`Must provide either a protobufjs Type or a descriptor`)
    }

    let TemplateType
    if (descriptor) {
      TemplateType = decodeDescriptor(descriptor).type
    } else TemplateType = type

    // serialize to correct type
    const fieldArray = TemplateType.fieldsArray
    for (let field in payload) {
      if (payload.hasOwnProperty(field)) {
        for (let f of fieldArray) {
          if (field === f.name) {
            if (f.type === 'Txid') {
              payload[field] = buildTxids(payload[field])
            }
            if (f.type === 'bytes') {
              payload[field] = typeConvBytes(payload[field])
            }
            if (f.type === 'bool') {
              payload[field] = typeConvBool(payload[field])
            }
            if (protoNumberFields.includes(f.type)) {
              payload[field] = typeConvNumber(payload[field])
            }
          }
        }
      }
    }

    let err = TemplateType.verify(payload)
    if (err) throw Error(`Failed payload verification for: ${name}: ${err}`)

    let message = TemplateType.create(payload)
    let buffer = TemplateType.encode(message).finish()

    let anyPayload = {
      type_url: serializeNameToTypeUrl(name, TemplateType.fullName),
      value: buffer
    }
    err = ANY.verify(anyPayload)
    if (err) throw Error(err)

    const anyMessage = ANY.create(anyPayload)

    details.push(anyMessage)
  }

  const OipDetailsPayload = { details }

  let err = OipDetails.verify(OipDetailsPayload)
  if (err) throw Error(`Failed to verify OipDetails payload`)

  return OipDetails.create({ details })
}