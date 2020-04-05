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
      throw Error(`Failed to build OipDetails in recordProtoBuilder: \n ${err}`)
    }
  }

  // 1 build record message
  let recordData
  try {
    recordData = buildRecord({
      tags,
      payment,
      details,
      permissions
    })
  } catch (err) {
    throw Error(`Failed to build record in recordProtoBuilder: \n ${err}`)
  }
  const { recordMessage } = recordData

  // 2 build OIP5
  let oipFiveData
  try {
    oipFiveData = buildOipFiveTemplate({ record: recordMessage })
  } catch (err) {
    throw Error(`Failed to build OipFive proto template in recordProtoBuilder: \n ${err}`)
  }
  const { oip5messageBuffer, oip5message64 } = oipFiveData

  // 3 sign oip5b64 message
  let signedMessagedData
  try {
    signedMessagedData = signMessage({ ECPair: keypair, message: oip5message64 })
  } catch (err) {
    throw Error(`Failed to sign message in recordProtoBuilder: \n ${err}`)
  }
  const { publicKeyAscii, signature } = signedMessagedData

  // 4 build SignedMessageProto
  try {
    return buildSignedMessage({ SerializedMessage: oip5messageBuffer, PubKey: publicKeyAscii, Signature: signature })
  } catch (err) {
    throw Error(`Failed to build signed message in recordProtoBuilder: \n ${err}`)
  }
}
