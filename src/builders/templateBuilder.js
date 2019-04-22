import { ECPair } from 'bitcoinjs-lib'
import isValidWIF from '../util/isValidWIF'
import networks from '../networks'
import {
  buildRecordTemplate,
  buildOipFiveTemplate,
  signMessage,
  buildSignedMessage
} from './index'

export default function templateBuilder ({ friendlyName, description, DescriptorSetProto, wif, network = 'mainnet' }) {
  if (!friendlyName || friendlyName === '') {
    throw new Error(`template name must be defined; was passed: ${friendlyName}`)
  }
  if (!description || description === '') {
    throw new Error(`description must be defined; was passed: ${description}`)
  }
  if (!DescriptorSetProto) {
    throw new Error(`DescriptorSetProto must be a defined Uint8Array; was passed: ${DescriptorSetProto}`)
  }
  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif}`)
  }
  if (!isValidWIF(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network}`)
  }

  network = network === 'mainnet' ? networks.floMainnet : networks.floTestnet
  const keypair = ECPair.fromWIF(wif, network)

  // 1 build template message
  let { templateMessage } = buildRecordTemplate({ friendlyName, description, DescriptorSetProto })

  // 2 build OIP5
  const { oip5messageBuffer, oip5message64 } = buildOipFiveTemplate(templateMessage)

  // 3 sign oip5b64 message
  const { publicKeyAscii, signature } = signMessage({ ECPair: keypair, message: oip5message64 })

  // 4 build SignedMessageProto
  return buildSignedMessage({ SerializedMessage: oip5messageBuffer, PubKey: publicKeyAscii, Signature: signature })
}
