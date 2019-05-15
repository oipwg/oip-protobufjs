import { util } from 'protobufjs'
import { ProtoModules } from '../index'

const RecordTemplateProto = ProtoModules.oipProto.RecordTemplateProto

export default function buildRecordTemplate ({
  friendlyName,
  description,
  DescriptorSetProto,
  _extends
}) {
  const templatePayload = {
    friendlyName,
    description,
    DescriptorSetProto,
    extends: _extends
  }

  let err = RecordTemplateProto.verify(templatePayload)
  if (err) {
    throw new Error(err)
  }

  const templateMessage = RecordTemplateProto.create(templatePayload)
  const templateBuffer = RecordTemplateProto.encode(templateMessage).finish()
  const template64 = util.base64.encode(templateBuffer, 0, templateBuffer.length)
  return { templateBuffer, template64, templateMessage }
}
