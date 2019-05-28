import { Enum } from 'protobufjs'
import decodeDescriptor from '../src/builders/decodeDescriptor'
import buildDescriptor from '../src/builders/buildDescriptor'
import buildTxids from '../src/builders/buildTxids'
import buildOipDetails from '../src/builders/buildOipDetails'
import templateBuilder from '../src/builders/templateBuilder'

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
        expect(names.includes(field.name))
      }
    }
    const fieldArray = TemplateType.fieldsArray
    for (let field of fieldArray) {
      expect(names.includes(field.name)).toBeTruthy()
    }
  })
  it('decode descriptor for web', () => {
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
    const { webFmt } = decodeDescriptor(fileDescriptor, true)
    expect(webFmt).toEqual({
      fields: {
        name: {
          extend: undefined,
          type: 'string',
          id: 1,
          repeated: false,
        },
        age: {
          extend: undefined,
          id: 2,
          type: 'uint32',
          repeated: false,
        },
        occupation: {
          extend: undefined,
          id: 3,
          type: 'string',
          repeated: false
        },
        friends: {
          extend: undefined,
          id: 6,
          type: 'Txid',
          repeated: true
        },
        familyMembers: {
          extend: undefined,
          id: 7,
          type: 'Txid',
          repeated: true
        }
      },
      enums: {
        Crystals: {
          rule: undefined,
          values: {
            Crystals_AGATE: 1,
            Crystals_ROSE: 2,
            UNDEFINED: 0
          }
        },
        Hobbies: {
          rule: undefined,
          values: { 'Hobbies_MTG': 1, 'Hobbies_ABLETON': 2, UNDEFINED: 0 }
        }
      }
    })
  })
  it('test build descriptor against invalid variable names', () => {
    const one = { name: 'family-members', type: 'OipRef', rule: 'repeated' }
    try {
      buildDescriptor(one)
    } catch (err) {
      expect(err.message).toEqual('invalid field name: family-members. Must start with a letter and only contain letters/numbers.')
    }
    const two = { name: 'hobbies', type: 'enum', values: ['mtg', '09A'] }
    try {
      buildDescriptor(two)
    } catch (err) {
      expect(err.message).toEqual('invalid enum value: 09A for enum field: hobbies. Must start with a letter and only contain letters/numbers.')
    }
    const three = { name: 'crystals', type: 'enum', values: ['_mtg', 's09A'] }
    try {
      buildDescriptor(three)
    } catch (err) {
      expect(err.message).toEqual('invalid enum value: _mtg for enum field: crystals. Must start with a letter and only contain letters/numbers.')
    }
    const four = { name: '0family-members', type: 'OipRef', rule: 'repeated' }
    try {
      buildDescriptor(four)
    } catch (err) {
      expect(err.message).toEqual('invalid field name: 0family-members. Must start with a letter and only contain letters/numbers.')
    }
  })
  it('build Txid', () => {
    let txids = [
      '169e1e83e930853391bc6f35f605c6754cfead57cf8387639d3b4096c54f18f4',
      'f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16'
    ]
    let txidMessages = buildTxids(txids)
    for (let txid of txidMessages) {
      let raw = txid.raw
      expect(txids.includes(raw.toString()))
    }
  })
  it('buildDescriptor against backend builder', () => {
    const descriptorValues = [
      {name: 'mass', type: 'int64', index: 1},
      {name: 'name', type: 'string', index: 2},
      {name: 'moons', type: 'OipRef', rule: 'repeated', index: 3}
    ]

    const planetDescriptor = buildDescriptor(descriptorValues)
    console.log(planetDescriptor.toString('base64'))
    // let type = decodeDescriptor(planetDescriptor).type
    // // console.log(type.parent)

    const templateData = {
      friendlyName: 'Planet',
      description: "A celestial body moving in an elliptical orbit around a star",
      DescriptorSetProto: planetDescriptor,
      wif: 'cRVa9rNx5N1YKBw8PhavegJPFCiYCfC4n8cYmdc3X1Y6TyFZGG4B',
      network: 'testnet'
    }

    const {
      signedMessage,
      signedMessageBuffer,
      signedMessage64
    } = templateBuilder(templateData)
    console.log(signedMessage64)

  })
})