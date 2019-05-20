import buildDescriptor from '../src/builders/buildDescriptor'
import recordProtoBuilder from '../src/builders/recordProtoBuilder'
import buildOipDetails from '../src/builders/buildOipDetails'
import { ProtoModules } from '../src'

const BasicTemplate = ProtoModules.oipProto.templates.tmpl_00000000000BA51C
const FileTemplate = ProtoModules.oipProto.templates.tmpl_000000000000F113

const wif = 'cVeJgyPeQS2935MGpLWiPj28sowu2QxRx4vbdM5UinMwk151Epkq'

describe('RecordProto', () => {
  it('create record', () => {
    // create a fileDescriptor
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

    // create message from file descriptor
    const payload = {
      name: 'ryan',
      age: 23,
      occupation: 'dev',
      crystals: 2,
      hobbies: 2,
      friends: [Buffer.from('0x11')],
      familyMembers: [Buffer.from('0x33')]
    }

    const details = buildOipDetails([{ payload, name: 'mockName', descriptor: fileDescriptor }])

    const { signedMessage64 } = recordProtoBuilder({
      details,
      wif,
      network: 'testnet'
    })
    console.log(signedMessage64)
  })
  it('create record from existing template', () => {
    const descriptor = 'ClEKG29pcDVfcmVjb3JkX3RlbXBsYXRlcy5wcm90bxIVb2lwNS5yZWNvcmQudGVtcGxhdGVzIhMKAVASDgoGcG93ZXJzGAEgAygJYgZwcm90bzM='
    const name = 'tmpl_8D66C6AFF9BDD8EE'
    const payload = { powers: ['flight', 'music making', 'love'] }

    const details = buildOipDetails({ descriptor, name, payload })
    const { signedMessage64 } = recordProtoBuilder({ details, wif, network: 'testnet' })

    console.log(signedMessage64)
  })
  it('create record matching golang test', () => {
    const heroName = 'tmpl_8D66C6AFF9BDD8EE'
    const heroDescriptor = 'ClEKG29pcDVfcmVjb3JkX3RlbXBsYXRlcy5wcm90bxIVb2lwNS5yZWNvcmQudGVtcGxhdGVzIhMKAVASDgoGcG93ZXJzGAEgAygJYgZwcm90bzM='
    const heroPayload = { powers: ['flight', 'invisibility'] }
    const hero = { name: heroName, descriptor: heroDescriptor, payload: heroPayload }

    const basicName = 'tmpl_00000000000BA51C'
    const basicPayload = {
      title: 'Sintel',
      description: 'Sintel, a free, Creative Commons movie',
      year: 2010
    }
    const basic = { name: basicName, payload: basicPayload, type: BasicTemplate }

    const fileName = 'tmpl_000000000000F113'
    const filePayload = {
      location: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent',
      network: 2,
      contentType: 'video/mp4',
      displayName: 'Sintel.mp4',
      filePath: 'Sintel/Sintel.mp4',
      size: 129241752,
    }

    const file = { name: fileName, payload: filePayload, type: FileTemplate }

    const data = [hero, basic, file]
    const details = buildOipDetails(data)
    const { signedMessage, signedMessage64 } = recordProtoBuilder({
      details,
      wif,
      network: 'testnet'
    })

    console.log(signedMessage64)
  })
})



