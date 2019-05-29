import { ECPair } from 'bitcoinjs-lib'
import isValidWIF from '../util/isValidWIF'
import networks from '../networks'
import {
  buildRecordTemplate,
  buildOipFiveTemplate,
  signMessage,
  buildSignedMessage
} from './index'
import typeConvExtends from '../util/typeConvExtends'

export default function templateBuilder ({
  friendlyName,
  description,
  DescriptorSetProto,
  _extends,
  wif,
  network = 'mainnet'
}) {
  if (!friendlyName || friendlyName === '') {
    throw new Error(`template name must be defined; was passed: ${friendlyName} \n`)
  }
  if (!description || description === '') {
    throw new Error(`description must be defined; was passed: ${description} \n`)
  }
  if (!DescriptorSetProto) {
    throw new Error(`DescriptorSetProto must be a defined Uint8Array; was passed: ${DescriptorSetProto} \n`)
  }
  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif} \n`)
  }
  if (!isValidWIF(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network} \n`)
  }
  try {
    _extends = typeConvExtends(_extends)
  } catch (err) {
    throw new Error(`Failed to convert types in {_extend} param: \n ${err}`)
  }

  network = network === 'mainnet' ? networks.floMainnet : networks.floTestnet
  const keypair = ECPair.fromWIF(wif, network)

  // 1 build template message
  let { templateMessage } = buildRecordTemplate({
    friendlyName,
    description,
    DescriptorSetProto,
    _extends
  })

  // 2 build OIP5
  const { oip5messageBuffer, oip5message64 } = buildOipFiveTemplate({recordTemplate: templateMessage})

  // 3 sign oip5b64 message
  const { publicKeyAscii, signature } = signMessage({ ECPair: keypair, message: oip5message64 })

  // 4 build SignedMessageProto
  return buildSignedMessage({ SerializedMessage: oip5messageBuffer, PubKey: publicKeyAscii, Signature: signature })
}
