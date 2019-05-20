import protobuf from 'protobufjs'
import descriptor from 'protobufjs/ext/descriptor'

/**
 * decode descriptor.proto into a Protobuf.js Type instance
 * @param buffer - encoded file descriptor
 * @returns {Type}
 */
export default function decodeDescriptor (buffer) {
  if (!Buffer.isBuffer(buffer)) {
    let uint8 = new Uint8Array()
    const len = protobuf.util.base64.decode(buffer, uint8, 0)
    uint8 = new Uint8Array(len)
    protobuf.util.base64.decode(buffer, uint8, 0)
    buffer = uint8
  }
  let decodedDescriptor = descriptor.FileDescriptorSet.decode(buffer)
  const root = protobuf.Root.fromDescriptor(decodedDescriptor)
  const type = root.lookupType('P')
  return type
}
