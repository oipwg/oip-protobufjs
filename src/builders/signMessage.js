import { sign } from 'bitcoinjs-message'
import { payments } from 'bitcoinjs-lib'

export default function signMessage ({ message, ECPair }) {
  let privateKeyBuffer = ECPair.privateKey
  let compressed = ECPair.compressed || true

  let signature
  try {
    signature = sign(message, privateKeyBuffer, compressed, ECPair.network.messagePrefix)
  } catch (e) {
    throw new Error(e)
  }

  const p2pkh = payments.p2pkh({ pubkey: ECPair.publicKey, network: ECPair.network }).address
  const publicKey = ECPair.publicKey
  let publicKeyAscii = new Uint8Array(p2pkh.length)
  for (let i in p2pkh) {
    publicKeyAscii[i] = (p2pkh.charCodeAt(i))
  }

  return {
    signature,
    p2pkh,
    publicKey,
    publicKeyAscii
  }
}
