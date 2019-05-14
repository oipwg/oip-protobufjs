"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildDescriptor;

var _protobufjs = _interopRequireDefault(require("protobufjs"));

var _descriptor = _interopRequireDefault(require("protobufjs/ext/descriptor"));

var _jsPascalcase = _interopRequireDefault(require("js-pascalcase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef {Object} fieldData
 * @param {string} fieldData.name - field name
 * @param {string} fieldData.type - field type
 * @param {string} [fieldData.rule] - rule as according to proto3 standards (must be 'repeated' or `undefined`)
 */

/**
 * helper function to build the descriptorSetProto filed in the recordTemplate.proto message
 * @param {Array.<fieldData>} fieldData
 * @returns {Uint8Array | Buffer | never | void}
 */
function buildDescriptor(fieldData) {
  const P = new _protobufjs.default.Type('P');
  const Txid = new _protobufjs.default.Type('Txid').add(new _protobufjs.default.Field('raw', 1, 'bytes', 'required'));
  let txidMessageAdded = false;
  const ENUM = 'enum';
  const OIP_REF = 'oipref';

  function serializeEnumValues(values, name) {
    name = (0, _jsPascalcase.default)(name);
    let enumValues = {};
    enumValues['UNDEFINED'] = 0; // set default value

    for (let index in values) {
      enumValues[`${name}_${values[index].toUpperCase()}`] = Number(index) + 1;
    }

    return enumValues;
  }

  let counter = 1;

  for (let field of fieldData) {
    let index = counter;
    let lowercaseType = field.type.toLowerCase();

    switch (lowercaseType) {
      case ENUM:
        P.add(new _protobufjs.default.Enum(field.name, serializeEnumValues(field.values)));
        break;

      case OIP_REF:
        P.add(new _protobufjs.default.Field(field.name, index, 'Txid', field.rule));

        if (!txidMessageAdded) {
          P.add(Txid);
          txidMessageAdded = true;
        }

        break;

      default:
        P.add(new _protobufjs.default.Field(field.name, index, field.type, field.rule));
    }

    counter += 1;
  }

  let root = new _protobufjs.default.Root();
  root.define('oipProto.templates').add(P);
  let descriptorFromRoot = root.toDescriptor('proto3');

  let buffer = _descriptor.default.FileDescriptorSet.encode(descriptorFromRoot).finish();

  return buffer;
}