"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recordProtoBuilder;

var _bitcoinjsLib = require("bitcoinjs-lib");

var _isValidWIF = _interopRequireDefault(require("../util/isValidWIF"));

var _networks = _interopRequireDefault(require("../networks"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function recordProtoBuilder({
  tags,
  payment,
  details,
  permissions,
  wif,
  network = 'mainnet'
}) {
  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif}`);
  }

  if (!(0, _isValidWIF.default)(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network}`);
  }

  network = network === 'mainnet' ? _networks.default.floMainnet : _networks.default.floTestnet;

  const keypair = _bitcoinjsLib.ECPair.fromWIF(wif, network); // 1 build record message


  let {
    recordMessage
  } = (0, _index.buildRecord)({
    tags,
    payment,
    details,
    permissions
  }); // 2 build OIP5

  const {
    oip5messageBuffer,
    oip5message64
  } = (0, _index.buildOipFiveTemplate)({
    record: recordMessage
  }); // 3 sign oip5b64 message

  const {
    publicKeyAscii,
    signature
  } = (0, _index.signMessage)({
    ECPair: keypair,
    message: oip5message64
  }); // 4 build SignedMessageProto

  return (0, _index.buildSignedMessage)({
    SerializedMessage: oip5messageBuffer,
    PubKey: publicKeyAscii,
    Signature: signature
  });
}