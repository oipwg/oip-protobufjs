"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildTxids;

var _index = require("../index");

const Txid = _index.ProtoModules.oipProto.Txid;
/**
 * Build txid proto message
 * @param {string|Array.<string>} txids - a string txid or an array of string txids
 */

function buildTxids(txids) {
  if (Array.isArray(txids)) {
    let newArray = [];

    for (let txid of txids) {
      newArray.push(createTxid(txid));
    }

    return newArray;
  } else {
    return createTxid(txids);
  }
}

function createTxid(txid) {
  const payload = {
    raw: Buffer.from(txid, 'hex')
  };
  let err = Txid.verify(payload);
  if (err) throw Error(`txid failed payload verification: ${err}`);
  return Txid.create(payload);
}