import { ProtoModules } from '../index'

const Txid = ProtoModules.oipProto.Txid

/**
 * Build txid proto message
 * @param {string|Array.<string>} txids - a string txid or an array of string txids
 */
export default function buildTxids (txids) {
  if (Array.isArray(txids)) {
    let newArray = []
    for (let txid of txids) {
      if (txid.length !== 64) {
        throw Error(`Txid must be 64 characters long. Was given: ${txid}`)
      }
      newArray.push(createTxid(txid))
    }
    return newArray
  } else {
    if (txids.length !== 64) {
      throw Error(`Txid must be 64 characters long. Was given: ${txid}`)
    }
    return createTxid(txids)
  }
}

function createTxid (txid) {
  const payload = {
    raw: Buffer.from(txid, 'hex')
  }
  let err = Txid.verify(payload)
  if (err) throw Error(`txid failed payload verification: ${err}`)

  return Txid.create(payload)
}

