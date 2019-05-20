import { Enum } from 'protobufjs'
import decodeDescriptor from '../src/builders/decodeDescriptor'
import buildDescriptor from '../src/builders/buildDescriptor'

describe('Test builder/helper functions', () => {
  it('build and deconstruct descriptor', () => {
    const names = ['name', 'age', 'occupation', 'crystals', 'hobbies', 'friends', 'familyMembers']
    const values = [
      { name: 'name', type: 'string' },
      { name: 'age', type: 'uint32' },
      { name: 'occupation', type: 'string' },
      { name: 'crystals', type: 'enum', values: ['agate', 'rose'] },
      { name: 'hobbies', type: 'enum', values: ['mtg', 'ableton'] },
      { name: 'friends', type: 'OipRef', rule: 'repeated' },
      { name: 'familyMembers', type: 'OipRef', rule: 'repeated' }
    ]
    const fileDescriptor = buildDescriptor(values)
    const TemplateType = decodeDescriptor(fileDescriptor).type

    const nestedArray = TemplateType.nestedArray
    for (let field of nestedArray) {
      if (field.name !== 'Txid') {
        expect(field instanceof Enum)
      }
    }
    const fieldArray = TemplateType.fieldsArray
    for (let field of fieldArray) {
      expect(names.includes(field.name)).toBeTruthy()
    }
  })
  it('decode descriptor for web', () => {
    const names = ['name', 'age', 'occupation', 'crystals', 'hobbies', 'friends', 'familyMembers']
    const values = [
      { name: 'name', type: 'string' },
      { name: 'age', type: 'uint32' },
      { name: 'occupation', type: 'string' },
      { name: 'crystals', type: 'enum', values: ['agate', 'rose'] },
      { name: 'hobbies', type: 'enum', values: ['mtg', 'ableton'] },
      { name: 'friends', type: 'OipRef', rule: 'repeated' },
      { name: 'familyMembers', type: 'OipRef', rule: 'repeated' }
    ]
    const fileDescriptor = buildDescriptor(values)
    const {webFmt} = decodeDescriptor(fileDescriptor)
    console.log(webFmt)
  })
})