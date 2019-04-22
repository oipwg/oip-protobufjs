import { util } from 'protobufjs'
import { staticModules } from '../index'

const RecordTemplateProto = staticModules.oip5.record.RecordTemplateProto

export default function buildRecordTemplate ({ friendlyName, description, DescriptorSetProto }) {
  const templatePayload = {
    friendlyName,
    description,
    DescriptorSetProto
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
