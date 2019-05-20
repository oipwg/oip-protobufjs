import { util } from 'protobufjs'
import { ProtoModules } from '../index'

const RecordProto = ProtoModules.oipProto.RecordProto

export default function buildRecord ({
  tags,
  payment,
  details,
  permissions
}) {
  const recordPayload = {
    tags,
    payment,
    details,
    permissions
  }
  let err = RecordProto.verify(recordPayload)
  if (err) {
    throw new Error(err)
  }
  const recordMessage = RecordProto.create(recordPayload)
  const recordBuffer = RecordProto.encode(recordMessage).finish()
  const record64 = util.base64.encode(recordBuffer, 0, recordBuffer.length)
  return { recordBuffer, record64, recordMessage }
}
