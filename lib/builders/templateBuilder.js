"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = templateBuilder;

var _bitcoinjsLib = require("bitcoinjs-lib");

var _isValidWIF = _interopRequireDefault(require("../util/isValidWIF"));

var _networks = _interopRequireDefault(require("../networks"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function templateBuilder({
  friendlyName,
  description,
  DescriptorSetProto,
  _extends,
  wif,
  network = 'mainnet'
}) {
  if (!friendlyName || friendlyName === '') {
    throw new Error(`template name must be defined; was passed: ${friendlyName}`);
  }

  if (!description || description === '') {
    throw new Error(`description must be defined; was passed: ${description}`);
  }

  if (!DescriptorSetProto) {
    throw new Error(`DescriptorSetProto must be a defined Uint8Array; was passed: ${DescriptorSetProto}`);
  }

  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif}`);
  }

  if (!(0, _isValidWIF.default)(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network}`);
  }

  network = network === 'mainnet' ? _networks.default.floMainnet : _networks.default.floTestnet;

  const keypair = _bitcoinjsLib.ECPair.fromWIF(wif, network); // 1 build template message


  let {
    templateMessage
  } = (0, _index.buildRecordTemplate)({
    friendlyName,
    description,
    DescriptorSetProto,
    _extends
  }); // 2 build OIP5

  const {
    oip5messageBuffer,
    oip5message64
  } = (0, _index.buildOipFiveTemplate)({
    recordTemplate: templateMessage
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