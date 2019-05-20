import { util } from 'protobufjs'
import { ProtoModules } from '../index'

const OipFiveProto = ProtoModules.oipProto.OipFive

export default function buildOipFiveTemplate ({
  recordTemplate,
  record,
  normalize,
  transfer,
  deactivate,
  edit
}) {
  const templatePayload = {
    recordTemplate,
    record,
    normalize,
    transfer,
    deactivate,
    edit
  }

  let err = OipFiveProto.verify(templatePayload)
  if (err) {
    throw new Error(err)
  }

  const oip5message = OipFiveProto.create(templatePayload)
  const oip5messageBuffer = OipFiveProto.encode(oip5message).finish()
  const oip5message64 = util.base64.encode(oip5messageBuffer, 0, oip5messageBuffer.length)
  return { oip5messageBuffer, oip5message64, oip5message }
}
