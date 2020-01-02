"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildDescriptor;

var _protobufjs2 = _interopRequireDefault(require("protobufjs"));

var _descriptor = _interopRequireDefault(require("protobufjs/ext/descriptor"));

var _jsPascalcase = _interopRequireDefault(require("js-pascalcase"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildDescriptor(fieldData) {
  if (!Array.isArray(fieldData)) {
    fieldData = [fieldData];
  }

  const reg = /^[a-zA-Z]\w*$/;

  for (let field of fieldData) {
    if (!reg.test(field.name)) {
      throw Error(`invalid field name: ${field.name}. Must start with a letter and only contain letters/numbers.`);
    }

    if (field.values) {
      for (let value of field.values) {
        if (!reg.test(value)) {
          throw Error(`invalid enum value: ${value} for enum field: ${field.name}. Must start with a letter and only contain letters/numbers.`);
        }
      }
    }
  }

  let pRoot = new _protobufjs2.default.Root();
  let oipProtoNameSpace = pRoot.define('oipProto');
  let tmplNameSpace = oipProtoNameSpace.define('templates');
  const Txid = new _protobufjs2.default.Type('Txid').add(new _protobufjs2.default.Field('raw', 1, 'bytes'));
  const P = new _protobufjs2.default.Type('P');
  let txidMessageAdded = false;
  const ENUM = 'enum';
  const OIP_REF = 'oipref';

  function serializeEnumValues(values, name) {
    name = (0, _jsPascalcase.default)(name);
    let enumValues = {};
    enumValues[`${name}_Undefined`] = 0; // set default value

    for (let index in values) {
      enumValues[`${name}_${values[index].toUpperCase()}`] = Number(index) + 1;
    }

    return enumValues;
  }

  let counter = 1;

  for (let field of fieldData) {
    let index = counter;
    const name = (0, _lodash.camelCase)(field.name);
    const rule = field.rule;
    const enumValues = field.values ? serializeEnumValues(field.values, name) : undefined;
    const type = field.type;
    const lowercaseType = field.type.toLowerCase();
    const tag = field.index || index;

    switch (lowercaseType) {
      case ENUM:
        let pascalName = (0, _jsPascalcase.default)(name);
        P.add(new _protobufjs2.default.Enum(pascalName, enumValues));
        P.add(new _protobufjs.default.Field(name, tag, pascalName, rule));
        break;

      case OIP_REF:
        if (!txidMessageAdded) {
          P.add(Txid);
          txidMessageAdded = true;
        }

        let field = new _protobufjs2.default.Field(name, tag, 'Txid', rule);
        P.add(field);
        break;

      default:
        P.add(new _protobufjs2.default.Field(name, tag, type, rule));
    }

    counter += 1;
  }

  tmplNameSpace.add(P);
  tmplNameSpace.filename = 'p.proto';
  let descriptorFromRoot = pRoot.toDescriptor('proto3');

  let buffer = _descriptor.default.FileDescriptorSet.encode(descriptorFromRoot).finish();

  return buffer;
}