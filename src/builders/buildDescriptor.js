import protobuf from 'protobufjs'
import descriptor from 'protobufjs/ext/descriptor'

import toPascalCase from 'js-pascalcase'
import { camelCase } from 'lodash'
import { ProtoModules } from '../index'
import path from "path"

const descriptorPackage = 'oipProto.templates'
// const Txid = ProtoModules.oipProto.Txid

/**
 * @typedef {Object} fieldData
 * @param {string} fieldData.name - field name
 * @param {string} fieldData.type - field type
 * @param {string} [fieldData.rule] - rule as according to proto3 standards (must be 'repeated' or `undefined`)
 * @param {array} [fieldData.values] - **only used for enum** enum values in an array
 * @param {number} [fieldData.index] - optionally declare proto tag number
 */

/**
 * helper function to build the descriptorSetProto filed in the recordTemplate.proto message
 * @param {fieldData|Array.<fieldData>} fieldData
 * @returns {Uint8Array | Buffer | never | void}
 */
export default function buildDescriptor (fieldData) {
  if (!Array.isArray(fieldData)) {
    fieldData = [fieldData]
  }
  const reg = /^[a-zA-Z]\w*$/

  for (let field of fieldData) {
      if (!reg.test(field.name)) {
        throw Error(`invalid field name: ${field.name}. Must start with a letter and only contain letters/numbers.`)
      }
      if (field.values) {
        for (let value of field.values) {
          if (!reg.test(value)) {
            throw Error(`invalid enum value: ${value} for enum field: ${field.name}. Must start with a letter and only contain letters/numbers.`)
          }
        }
      }
    }

  let pRoot = new protobuf.Root()
  pRoot.filename = 'p.proto'
  pRoot.define(descriptorPackage)

  const Txid = new protobuf.Type('Txid').add(
    new protobuf.Field('raw', 1, 'bytes')
  )

  // let tRoot = new protobuf.Root()
  // tRoot.filename = 'txid.proto'
  // tRoot.define('oipProto')
  // tRoot.add(Txid)

  // protobuf.load(path.resolve('./', 'src', 'messages', 'oipProto', 'txid.proto'))

  // let descriptorSet = new protobuf.Root()
  // descriptorSet.add(pRoot)
  // descriptorSet.add(tRoot)

  const P = new protobuf.Type('P')

  let txidMessageAdded = false
  const ENUM = 'enum'
  const OIP_REF = 'oipref'

  function serializeEnumValues (values, name) {
    name = toPascalCase(name)
    let enumValues = {}
    enumValues['UNDEFINED'] = 0 // set default value
    for (let index in values) {
      enumValues[`${name}_${values[index].toUpperCase()}`] = (Number(index) + 1)
    }
    return enumValues
  }

  let counter = 1
  for (let field of fieldData) {
    let index = counter

    const name = camelCase(field.name)
    const rule = field.rule
    const enumValues = field.values ? serializeEnumValues(field.values, name) : undefined
    const type = field.type

    const lowercaseType = field.type.toLowerCase()
    const tag = field.index || index
    switch (lowercaseType) {
      case ENUM:
        P.add(new protobuf.Enum(toPascalCase(name), enumValues))
        break
      case OIP_REF:
        if (!txidMessageAdded) {
          pRoot.add(Txid)
          txidMessageAdded = true
        }
        // pRoot.add(Txid)
        let field = new protobuf.Field(name, tag, 'Txid', rule)
        P.add(field)
        // pRoot.remove(Txid)
        break
      default:
        P.add(new protobuf.Field(name, tag, type, rule))
    }
    counter += 1
  }

  pRoot.add(P)
  let descriptorFromRoot = pRoot.toDescriptor('proto3')
  let buffer = descriptor.FileDescriptorSet.encode(descriptorFromRoot).finish()

  return buffer
}
