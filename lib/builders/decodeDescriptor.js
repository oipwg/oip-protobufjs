"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeDescriptor;

var _protobufjs = _interopRequireDefault(require("protobufjs"));

var _descriptor = _interopRequireDefault(require("protobufjs/ext/descriptor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * decode descriptor.proto into a Protobuf.js Type instance
 * @param protoDescriptor - encoded file descriptor
 * @param {Boolean} [forWeb=false] - return a serialized object with fields, types, an enums to make it easier for UI
 * @returns {Object}
 */
function decodeDescriptor(protoDescriptor, forWeb = false) {
  if (!Buffer.isBuffer(protoDescriptor)) {
    let uint8 = new Uint8Array();

    const len = _protobufjs.default.util.base64.decode(protoDescriptor, uint8, 0);

    uint8 = new Uint8Array(len);

    _protobufjs.default.util.base64.decode(protoDescriptor, uint8, 0);

    protoDescriptor = uint8;
  }

  let decodedDescriptor = _descriptor.default.FileDescriptorSet.decode(protoDescriptor);

  const root = _protobufjs.default.Root.fromDescriptor(decodedDescriptor);

  const type = root.lookupType('P');
  let webFmt = {
    enums: {},
    fields: {}
  };
  const nestedArray = type.nestedArray;

  for (let field of nestedArray) {
    if (field.name !== 'Txid') {
      webFmt.enums[field.name] = {
        values: field.values,
        rule: field.rule
      };
    }
  }

  const fieldArray = type.fieldsArray;

  for (let field of fieldArray) {
    webFmt.fields[field.name] = {
      type: field.type,
      rule: field.rule,
      id: field.id,
      repeated: field.repeated,
      extend: field.extend,
      required: field.required
    };
  }

  return {
    type,
    webFmt
  };
}