import decodeDescriptor from './decodeDescriptor'
import { ProtoModules } from '../index'
import buildTxids from './buildTxids'

const ANY = ProtoModules.google.protobuf.Any
const OipDetails = ProtoModules.oipProto.OipDetails

const googleApis = 'type.googleapis.com/'

function serializeNameToTypeUrl(name) {
  if (name.startsWith('tmpl') && name.length === 13) {
    return `${googleApis}oipProto.templates.${name}`
  } else {
    return `${googleApis}${name}`
  }
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

function typeConvBool(values) {


  if (Array.isArray(values)) {
    let newArray = []
    for (let field of values) {
      if (field === 'true') {
        newArray.push(true)
      } else if (field === 'false') {
        newArray.push(false)
      } else {
        throw new Error(`Expecting a boolean. Was given: ${value}`)
      }
    }
    return newArray
  } else {
    if (values === 'true') {
      return true
    } else if (values === 'false') {
      return false
    } else {
      throw new Error(`Expecting a boolean. Was given: ${values}`)
    }
  }
}

function typeConvNumber(values) {
  if (Array.isArray(values)) {
    let newArray = []
    for (let field of values) {
      if (isNaN(Number(field))) {
        throw new Error(`Expecting a number. Received: ${field}`)
      } else {
        newArray.push(Number(field))
      }
    }
    return newArray
  } else {
    if (isNaN(Number(values))) {
      throw new Error(`Expecting a number. Received: ${values}`)
    } else {
      return Number(values)
    }
  }
}

function typeConvBytes(values) {
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
 * @param {Array.isArray<Object>|Object} data
 * @param data.name - template name
 * @param data.payload - template object information (fields with assigned values)
 * @param [data.descriptor] - the file descriptor that defines the template being used for the payload
 * @param [data.type] - protobuf Type class to build the messages
 * @param {boolean} [returnAny] - return an array of messages of type ANY
 * @returns {OipDetails|Array.<ANY>}
 */
export default function buildOipDetails(data, returnAny = false) {
  if (!Array.isArray(data)) {
    data = [data]
  }

  let anyDetails = []

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
            // check for repeats
            if (f.repeated && !Array.isArray(payload[field])) {
              payload[field] = [payload[field]]
            }
            // check for strings
            if (f.type === 'string') {
              if (Array.isArray(payload[field])) {
                for (let f of payload[field]) {
                  if (typeof f !== 'string') {
                    throw Error(`Expected to be passed a string for field: { ${field} } - was given: ${f}`)
                  }
                }
              } else {
                if (typeof payload[field] !== 'string') {
                  throw Error(`Expected to be passed a string for field: { ${field} } - was given: ${payload[field]}`)
                }
              }
            }
            // check for Txids (OipRefs)
            if (f.type === 'Txid') {
              try {
                payload[field] = buildTxids(payload[field])
              } catch (err) {
                throw Error(`Failed to convert field { ${field} } into txid messages: ${err}`)
              }
            }
            // check for bytes
            if (f.type === 'bytes') {
              payload[field] = typeConvBytes(payload[field])
            }
            // check for booleans
            if (f.type === 'bool') {
              try {
                payload[field] = typeConvBool(payload[field])
              } catch (err) {
                throw Error(`Failed to convert field { ${field} } into a bool: ${err}`)
              }
            }
            // check for all other number types
            if (protoNumberFields.includes(f.type)) {
              try {
                payload[field] = typeConvNumber(payload[field])
              } catch (err) {
                throw Error(`Failed to convert field: { ${field} } into a number: ${err}`)
              }
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
      type_url: serializeNameToTypeUrl(name),
      value: buffer
    }
    err = ANY.verify(anyPayload)
    if (err) throw Error(`Failed payload verification attempting to build OipDetails for { ${item.name} }: \n ${err}`)

    const anyMessage = ANY.create(anyPayload)

    anyDetails.push(anyMessage)
  }

  if (returnAny) {
    return anyDetails
  }

  const OipDetailsPayload = { details: anyDetails }

  let err = OipDetails.verify(OipDetailsPayload)
  if (err) throw Error(`Failed to verify OipDetails payload: \n ${err}`)

  return OipDetails.create(OipDetailsPayload)
}