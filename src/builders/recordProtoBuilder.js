import { ECPair } from 'bitcoinjs-lib'
import isValidWIF from '../util/isValidWIF'
import networks from '../networks'
import {
  buildRecord,
  buildOipFiveTemplate,
  signMessage,
  buildSignedMessage
} from './index'
import buildOipDetails from './buildOipDetails'

export default function recordProtoBuilder ({
  tags,
  payment,
  details,
  detailsData,
  permissions,
  wif,
  network = 'mainnet'
}) {
  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif}`)
  }
  if (!isValidWIF(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network}`)
  }

  network = network === 'mainnet' ? networks.floMainnet : networks.floTestnet
  const keypair = ECPair.fromWIF(wif, network)

  // build details from param if passed
  if (detailsData) {
    try {
      details = buildOipDetails(detailsData)
    } catch (err) {
      throw Error(err)
    }
  }

  // 1 build record message
  let { recordMessage } = buildRecord({
    tags,
    payment,
    details,
    permissions
  })

  // 2 build OIP5
  const { oip5messageBuffer, oip5message64 } = buildOipFiveTemplate({ record: recordMessage })

  // 3 sign oip5b64 message
  const { publicKeyAscii, signature } = signMessage({ ECPair: keypair, message: oip5message64 })

  // 4 build SignedMessageProto
  return buildSignedMessage({ SerializedMessage: oip5messageBuffer, PubKey: publicKeyAscii, Signature: signature })
}
