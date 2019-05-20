import protobuf from 'protobufjs'
import descriptor from 'protobufjs/ext/descriptor'

/**
 * decode descriptor.proto into a Protobuf.js Type instance
 * @param protoDescriptor - encoded file descriptor
 * @param {Boolean} [forWeb=false] - return a serialized object with fields, types, an enums to make it easier for UI
 * @returns {Object}
 */
export default function decodeDescriptor (protoDescriptor, forWeb = false) {
  if (!Buffer.isBuffer(protoDescriptor)) {
    let uint8 = new Uint8Array()
    const len = protobuf.util.base64.decode(protoDescriptor, uint8, 0)
    uint8 = new Uint8Array(len)
    protobuf.util.base64.decode(protoDescriptor, uint8, 0)
    protoDescriptor = uint8
  }
  let decodedDescriptor = descriptor.FileDescriptorSet.decode(protoDescriptor)
  const root = protobuf.Root.fromDescriptor(decodedDescriptor)
  const type = root.lookupType('P')

  let webFmt = { enums: {}, fields: {}}

  const nestedArray = type.nestedArray
  for (let field of nestedArray) {
    if (field.name !== 'Txid') {
     webFmt.enums[field.name] = {
       values: field.values,
       rule: field.rule
     }
    }
  }
  const fieldArray = type.fieldsArray
  for (let field of fieldArray) {
    webFmt.fields[field.name] = {
      type: field.type,
      rule: field.rule,
      id: field.id,
      repeated: field.repeated,
      extend: field.extend,
      required: field.required
    }
  }

  return {
    type,
    webFmt
  }
}
