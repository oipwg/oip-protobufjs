/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.oip5 = (function() {
    
        /**
         * Namespace oip5.
         * @exports oip5
         * @namespace
         */
        var oip5 = {};
    
        oip5.OipFive = (function() {
    
            /**
             * Properties of an OipFive.
             * @memberof oip5
             * @interface IOipFive
             * @property {oip5.record.IRecordTemplateProto|null} [recordTemplate] OipFive recordTemplate
             * @property {oip5.IRecordProto|null} [record] OipFive record
             * @property {oip5.ITransfer|null} [transfer] OipFive transfer
             * @property {oip5.IDeactivate|null} [deactivate] OipFive deactivate
             * @property {oip5.IEdit|null} [edit] OipFive edit
             */
    
            /**
             * Constructs a new OipFive.
             * @memberof oip5
             * @classdesc Represents an OipFive.
             * @implements IOipFive
             * @constructor
             * @param {oip5.IOipFive=} [properties] Properties to set
             */
            function OipFive(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OipFive recordTemplate.
             * @member {oip5.record.IRecordTemplateProto|null|undefined} recordTemplate
             * @memberof oip5.OipFive
             * @instance
             */
            OipFive.prototype.recordTemplate = null;
    
            /**
             * OipFive record.
             * @member {oip5.IRecordProto|null|undefined} record
             * @memberof oip5.OipFive
             * @instance
             */
            OipFive.prototype.record = null;
    
            /**
             * OipFive transfer.
             * @member {oip5.ITransfer|null|undefined} transfer
             * @memberof oip5.OipFive
             * @instance
             */
            OipFive.prototype.transfer = null;
    
            /**
             * OipFive deactivate.
             * @member {oip5.IDeactivate|null|undefined} deactivate
             * @memberof oip5.OipFive
             * @instance
             */
            OipFive.prototype.deactivate = null;
    
            /**
             * OipFive edit.
             * @member {oip5.IEdit|null|undefined} edit
             * @memberof oip5.OipFive
             * @instance
             */
            OipFive.prototype.edit = null;
    
            /**
             * Creates a new OipFive instance using the specified properties.
             * @function create
             * @memberof oip5.OipFive
             * @static
             * @param {oip5.IOipFive=} [properties] Properties to set
             * @returns {oip5.OipFive} OipFive instance
             */
            OipFive.create = function create(properties) {
                return new OipFive(properties);
            };
    
            /**
             * Encodes the specified OipFive message. Does not implicitly {@link oip5.OipFive.verify|verify} messages.
             * @function encode
             * @memberof oip5.OipFive
             * @static
             * @param {oip5.IOipFive} message OipFive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OipFive.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.recordTemplate != null && message.hasOwnProperty("recordTemplate"))
                    $root.oip5.record.RecordTemplateProto.encode(message.recordTemplate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.record != null && message.hasOwnProperty("record"))
                    $root.oip5.RecordProto.encode(message.record, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.transfer != null && message.hasOwnProperty("transfer"))
                    $root.oip5.Transfer.encode(message.transfer, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.deactivate != null && message.hasOwnProperty("deactivate"))
                    $root.oip5.Deactivate.encode(message.deactivate, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.edit != null && message.hasOwnProperty("edit"))
                    $root.oip5.Edit.encode(message.edit, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified OipFive message, length delimited. Does not implicitly {@link oip5.OipFive.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.OipFive
             * @static
             * @param {oip5.IOipFive} message OipFive message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OipFive.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OipFive message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.OipFive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.OipFive} OipFive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OipFive.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.OipFive();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.recordTemplate = $root.oip5.record.RecordTemplateProto.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.record = $root.oip5.RecordProto.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.transfer = $root.oip5.Transfer.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.deactivate = $root.oip5.Deactivate.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.edit = $root.oip5.Edit.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OipFive message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.OipFive
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.OipFive} OipFive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OipFive.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OipFive message.
             * @function verify
             * @memberof oip5.OipFive
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OipFive.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.recordTemplate != null && message.hasOwnProperty("recordTemplate")) {
                    var error = $root.oip5.record.RecordTemplateProto.verify(message.recordTemplate);
                    if (error)
                        return "recordTemplate." + error;
                }
                if (message.record != null && message.hasOwnProperty("record")) {
                    var error = $root.oip5.RecordProto.verify(message.record);
                    if (error)
                        return "record." + error;
                }
                if (message.transfer != null && message.hasOwnProperty("transfer")) {
                    var error = $root.oip5.Transfer.verify(message.transfer);
                    if (error)
                        return "transfer." + error;
                }
                if (message.deactivate != null && message.hasOwnProperty("deactivate")) {
                    var error = $root.oip5.Deactivate.verify(message.deactivate);
                    if (error)
                        return "deactivate." + error;
                }
                if (message.edit != null && message.hasOwnProperty("edit")) {
                    var error = $root.oip5.Edit.verify(message.edit);
                    if (error)
                        return "edit." + error;
                }
                return null;
            };
    
            /**
             * Creates an OipFive message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.OipFive
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.OipFive} OipFive
             */
            OipFive.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.OipFive)
                    return object;
                var message = new $root.oip5.OipFive();
                if (object.recordTemplate != null) {
                    if (typeof object.recordTemplate !== "object")
                        throw TypeError(".oip5.OipFive.recordTemplate: object expected");
                    message.recordTemplate = $root.oip5.record.RecordTemplateProto.fromObject(object.recordTemplate);
                }
                if (object.record != null) {
                    if (typeof object.record !== "object")
                        throw TypeError(".oip5.OipFive.record: object expected");
                    message.record = $root.oip5.RecordProto.fromObject(object.record);
                }
                if (object.transfer != null) {
                    if (typeof object.transfer !== "object")
                        throw TypeError(".oip5.OipFive.transfer: object expected");
                    message.transfer = $root.oip5.Transfer.fromObject(object.transfer);
                }
                if (object.deactivate != null) {
                    if (typeof object.deactivate !== "object")
                        throw TypeError(".oip5.OipFive.deactivate: object expected");
                    message.deactivate = $root.oip5.Deactivate.fromObject(object.deactivate);
                }
                if (object.edit != null) {
                    if (typeof object.edit !== "object")
                        throw TypeError(".oip5.OipFive.edit: object expected");
                    message.edit = $root.oip5.Edit.fromObject(object.edit);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an OipFive message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.OipFive
             * @static
             * @param {oip5.OipFive} message OipFive
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OipFive.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.recordTemplate = null;
                    object.record = null;
                    object.transfer = null;
                    object.deactivate = null;
                    object.edit = null;
                }
                if (message.recordTemplate != null && message.hasOwnProperty("recordTemplate"))
                    object.recordTemplate = $root.oip5.record.RecordTemplateProto.toObject(message.recordTemplate, options);
                if (message.record != null && message.hasOwnProperty("record"))
                    object.record = $root.oip5.RecordProto.toObject(message.record, options);
                if (message.transfer != null && message.hasOwnProperty("transfer"))
                    object.transfer = $root.oip5.Transfer.toObject(message.transfer, options);
                if (message.deactivate != null && message.hasOwnProperty("deactivate"))
                    object.deactivate = $root.oip5.Deactivate.toObject(message.deactivate, options);
                if (message.edit != null && message.hasOwnProperty("edit"))
                    object.edit = $root.oip5.Edit.toObject(message.edit, options);
                return object;
            };
    
            /**
             * Converts this OipFive to JSON.
             * @function toJSON
             * @memberof oip5.OipFive
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OipFive.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OipFive;
        })();
    
        oip5.RecordProto = (function() {
    
            /**
             * Properties of a RecordProto.
             * @memberof oip5
             * @interface IRecordProto
             * @property {Array.<string>|null} [tags] RecordProto tags
             * @property {oip5.IPayment|null} [payment] RecordProto payment
             * @property {oip5.IOipDetails|null} [details] RecordProto details
             * @property {oip5.IPermissions|null} [permissions] RecordProto permissions
             */
    
            /**
             * Constructs a new RecordProto.
             * @memberof oip5
             * @classdesc Represents a RecordProto.
             * @implements IRecordProto
             * @constructor
             * @param {oip5.IRecordProto=} [properties] Properties to set
             */
            function RecordProto(properties) {
                this.tags = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RecordProto tags.
             * @member {Array.<string>} tags
             * @memberof oip5.RecordProto
             * @instance
             */
            RecordProto.prototype.tags = $util.emptyArray;
    
            /**
             * RecordProto payment.
             * @member {oip5.IPayment|null|undefined} payment
             * @memberof oip5.RecordProto
             * @instance
             */
            RecordProto.prototype.payment = null;
    
            /**
             * RecordProto details.
             * @member {oip5.IOipDetails|null|undefined} details
             * @memberof oip5.RecordProto
             * @instance
             */
            RecordProto.prototype.details = null;
    
            /**
             * RecordProto permissions.
             * @member {oip5.IPermissions|null|undefined} permissions
             * @memberof oip5.RecordProto
             * @instance
             */
            RecordProto.prototype.permissions = null;
    
            /**
             * Creates a new RecordProto instance using the specified properties.
             * @function create
             * @memberof oip5.RecordProto
             * @static
             * @param {oip5.IRecordProto=} [properties] Properties to set
             * @returns {oip5.RecordProto} RecordProto instance
             */
            RecordProto.create = function create(properties) {
                return new RecordProto(properties);
            };
    
            /**
             * Encodes the specified RecordProto message. Does not implicitly {@link oip5.RecordProto.verify|verify} messages.
             * @function encode
             * @memberof oip5.RecordProto
             * @static
             * @param {oip5.IRecordProto} message RecordProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RecordProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                if (message.payment != null && message.hasOwnProperty("payment"))
                    $root.oip5.Payment.encode(message.payment, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.details != null && message.hasOwnProperty("details"))
                    $root.oip5.OipDetails.encode(message.details, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.permissions != null && message.hasOwnProperty("permissions"))
                    $root.oip5.Permissions.encode(message.permissions, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RecordProto message, length delimited. Does not implicitly {@link oip5.RecordProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.RecordProto
             * @static
             * @param {oip5.IRecordProto} message RecordProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RecordProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RecordProto message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.RecordProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.RecordProto} RecordProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RecordProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.RecordProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 4:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 6:
                        message.payment = $root.oip5.Payment.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.details = $root.oip5.OipDetails.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.permissions = $root.oip5.Permissions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RecordProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.RecordProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.RecordProto} RecordProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RecordProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RecordProto message.
             * @function verify
             * @memberof oip5.RecordProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RecordProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.payment != null && message.hasOwnProperty("payment")) {
                    var error = $root.oip5.Payment.verify(message.payment);
                    if (error)
                        return "payment." + error;
                }
                if (message.details != null && message.hasOwnProperty("details")) {
                    var error = $root.oip5.OipDetails.verify(message.details);
                    if (error)
                        return "details." + error;
                }
                if (message.permissions != null && message.hasOwnProperty("permissions")) {
                    var error = $root.oip5.Permissions.verify(message.permissions);
                    if (error)
                        return "permissions." + error;
                }
                return null;
            };
    
            /**
             * Creates a RecordProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.RecordProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.RecordProto} RecordProto
             */
            RecordProto.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.RecordProto)
                    return object;
                var message = new $root.oip5.RecordProto();
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".oip5.RecordProto.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.payment != null) {
                    if (typeof object.payment !== "object")
                        throw TypeError(".oip5.RecordProto.payment: object expected");
                    message.payment = $root.oip5.Payment.fromObject(object.payment);
                }
                if (object.details != null) {
                    if (typeof object.details !== "object")
                        throw TypeError(".oip5.RecordProto.details: object expected");
                    message.details = $root.oip5.OipDetails.fromObject(object.details);
                }
                if (object.permissions != null) {
                    if (typeof object.permissions !== "object")
                        throw TypeError(".oip5.RecordProto.permissions: object expected");
                    message.permissions = $root.oip5.Permissions.fromObject(object.permissions);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RecordProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.RecordProto
             * @static
             * @param {oip5.RecordProto} message RecordProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RecordProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tags = [];
                if (options.defaults) {
                    object.payment = null;
                    object.details = null;
                    object.permissions = null;
                }
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.payment != null && message.hasOwnProperty("payment"))
                    object.payment = $root.oip5.Payment.toObject(message.payment, options);
                if (message.details != null && message.hasOwnProperty("details"))
                    object.details = $root.oip5.OipDetails.toObject(message.details, options);
                if (message.permissions != null && message.hasOwnProperty("permissions"))
                    object.permissions = $root.oip5.Permissions.toObject(message.permissions, options);
                return object;
            };
    
            /**
             * Converts this RecordProto to JSON.
             * @function toJSON
             * @memberof oip5.RecordProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RecordProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RecordProto;
        })();
    
        oip5.OipDetails = (function() {
    
            /**
             * Properties of an OipDetails.
             * @memberof oip5
             * @interface IOipDetails
             * @property {Array.<google.protobuf.IAny>|null} [details] OipDetails details
             */
    
            /**
             * Constructs a new OipDetails.
             * @memberof oip5
             * @classdesc Represents an OipDetails.
             * @implements IOipDetails
             * @constructor
             * @param {oip5.IOipDetails=} [properties] Properties to set
             */
            function OipDetails(properties) {
                this.details = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * OipDetails details.
             * @member {Array.<google.protobuf.IAny>} details
             * @memberof oip5.OipDetails
             * @instance
             */
            OipDetails.prototype.details = $util.emptyArray;
    
            /**
             * Creates a new OipDetails instance using the specified properties.
             * @function create
             * @memberof oip5.OipDetails
             * @static
             * @param {oip5.IOipDetails=} [properties] Properties to set
             * @returns {oip5.OipDetails} OipDetails instance
             */
            OipDetails.create = function create(properties) {
                return new OipDetails(properties);
            };
    
            /**
             * Encodes the specified OipDetails message. Does not implicitly {@link oip5.OipDetails.verify|verify} messages.
             * @function encode
             * @memberof oip5.OipDetails
             * @static
             * @param {oip5.IOipDetails} message OipDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OipDetails.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.details != null && message.details.length)
                    for (var i = 0; i < message.details.length; ++i)
                        $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified OipDetails message, length delimited. Does not implicitly {@link oip5.OipDetails.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.OipDetails
             * @static
             * @param {oip5.IOipDetails} message OipDetails message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OipDetails.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an OipDetails message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.OipDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.OipDetails} OipDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OipDetails.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.OipDetails();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.details && message.details.length))
                            message.details = [];
                        message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an OipDetails message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.OipDetails
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.OipDetails} OipDetails
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OipDetails.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an OipDetails message.
             * @function verify
             * @memberof oip5.OipDetails
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OipDetails.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    if (!Array.isArray(message.details))
                        return "details: array expected";
                    for (var i = 0; i < message.details.length; ++i) {
                        var error = $root.google.protobuf.Any.verify(message.details[i]);
                        if (error)
                            return "details." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an OipDetails message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.OipDetails
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.OipDetails} OipDetails
             */
            OipDetails.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.OipDetails)
                    return object;
                var message = new $root.oip5.OipDetails();
                if (object.details) {
                    if (!Array.isArray(object.details))
                        throw TypeError(".oip5.OipDetails.details: array expected");
                    message.details = [];
                    for (var i = 0; i < object.details.length; ++i) {
                        if (typeof object.details[i] !== "object")
                            throw TypeError(".oip5.OipDetails.details: object expected");
                        message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from an OipDetails message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.OipDetails
             * @static
             * @param {oip5.OipDetails} message OipDetails
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OipDetails.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.details = [];
                if (message.details && message.details.length) {
                    object.details = [];
                    for (var j = 0; j < message.details.length; ++j)
                        object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
                }
                return object;
            };
    
            /**
             * Converts this OipDetails to JSON.
             * @function toJSON
             * @memberof oip5.OipDetails
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OipDetails.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OipDetails;
        })();
    
        oip5.Payment = (function() {
    
            /**
             * Properties of a Payment.
             * @memberof oip5
             * @interface IPayment
             */
    
            /**
             * Constructs a new Payment.
             * @memberof oip5
             * @classdesc Represents a Payment.
             * @implements IPayment
             * @constructor
             * @param {oip5.IPayment=} [properties] Properties to set
             */
            function Payment(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Payment instance using the specified properties.
             * @function create
             * @memberof oip5.Payment
             * @static
             * @param {oip5.IPayment=} [properties] Properties to set
             * @returns {oip5.Payment} Payment instance
             */
            Payment.create = function create(properties) {
                return new Payment(properties);
            };
    
            /**
             * Encodes the specified Payment message. Does not implicitly {@link oip5.Payment.verify|verify} messages.
             * @function encode
             * @memberof oip5.Payment
             * @static
             * @param {oip5.IPayment} message Payment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Payment.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Payment message, length delimited. Does not implicitly {@link oip5.Payment.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.Payment
             * @static
             * @param {oip5.IPayment} message Payment message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Payment.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Payment message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.Payment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.Payment} Payment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Payment.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.Payment();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Payment message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.Payment
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.Payment} Payment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Payment.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Payment message.
             * @function verify
             * @memberof oip5.Payment
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Payment.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Payment message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.Payment
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.Payment} Payment
             */
            Payment.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.Payment)
                    return object;
                return new $root.oip5.Payment();
            };
    
            /**
             * Creates a plain object from a Payment message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.Payment
             * @static
             * @param {oip5.Payment} message Payment
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Payment.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Payment to JSON.
             * @function toJSON
             * @memberof oip5.Payment
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Payment.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Payment;
        })();
    
        oip5.Permissions = (function() {
    
            /**
             * Properties of a Permissions.
             * @memberof oip5
             * @interface IPermissions
             */
    
            /**
             * Constructs a new Permissions.
             * @memberof oip5
             * @classdesc Represents a Permissions.
             * @implements IPermissions
             * @constructor
             * @param {oip5.IPermissions=} [properties] Properties to set
             */
            function Permissions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Permissions instance using the specified properties.
             * @function create
             * @memberof oip5.Permissions
             * @static
             * @param {oip5.IPermissions=} [properties] Properties to set
             * @returns {oip5.Permissions} Permissions instance
             */
            Permissions.create = function create(properties) {
                return new Permissions(properties);
            };
    
            /**
             * Encodes the specified Permissions message. Does not implicitly {@link oip5.Permissions.verify|verify} messages.
             * @function encode
             * @memberof oip5.Permissions
             * @static
             * @param {oip5.IPermissions} message Permissions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Permissions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Permissions message, length delimited. Does not implicitly {@link oip5.Permissions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.Permissions
             * @static
             * @param {oip5.IPermissions} message Permissions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Permissions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Permissions message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.Permissions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.Permissions} Permissions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Permissions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.Permissions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Permissions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.Permissions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.Permissions} Permissions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Permissions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Permissions message.
             * @function verify
             * @memberof oip5.Permissions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Permissions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Permissions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.Permissions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.Permissions} Permissions
             */
            Permissions.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.Permissions)
                    return object;
                return new $root.oip5.Permissions();
            };
    
            /**
             * Creates a plain object from a Permissions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.Permissions
             * @static
             * @param {oip5.Permissions} message Permissions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Permissions.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Permissions to JSON.
             * @function toJSON
             * @memberof oip5.Permissions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Permissions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Permissions;
        })();
    
        oip5.Transfer = (function() {
    
            /**
             * Properties of a Transfer.
             * @memberof oip5
             * @interface ITransfer
             */
    
            /**
             * Constructs a new Transfer.
             * @memberof oip5
             * @classdesc Represents a Transfer.
             * @implements ITransfer
             * @constructor
             * @param {oip5.ITransfer=} [properties] Properties to set
             */
            function Transfer(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Transfer instance using the specified properties.
             * @function create
             * @memberof oip5.Transfer
             * @static
             * @param {oip5.ITransfer=} [properties] Properties to set
             * @returns {oip5.Transfer} Transfer instance
             */
            Transfer.create = function create(properties) {
                return new Transfer(properties);
            };
    
            /**
             * Encodes the specified Transfer message. Does not implicitly {@link oip5.Transfer.verify|verify} messages.
             * @function encode
             * @memberof oip5.Transfer
             * @static
             * @param {oip5.ITransfer} message Transfer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Transfer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Transfer message, length delimited. Does not implicitly {@link oip5.Transfer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.Transfer
             * @static
             * @param {oip5.ITransfer} message Transfer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Transfer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Transfer message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.Transfer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.Transfer} Transfer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transfer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.Transfer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Transfer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.Transfer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.Transfer} Transfer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transfer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Transfer message.
             * @function verify
             * @memberof oip5.Transfer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Transfer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.Transfer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.Transfer} Transfer
             */
            Transfer.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.Transfer)
                    return object;
                return new $root.oip5.Transfer();
            };
    
            /**
             * Creates a plain object from a Transfer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.Transfer
             * @static
             * @param {oip5.Transfer} message Transfer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Transfer.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Transfer to JSON.
             * @function toJSON
             * @memberof oip5.Transfer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Transfer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Transfer;
        })();
    
        oip5.Deactivate = (function() {
    
            /**
             * Properties of a Deactivate.
             * @memberof oip5
             * @interface IDeactivate
             */
    
            /**
             * Constructs a new Deactivate.
             * @memberof oip5
             * @classdesc Represents a Deactivate.
             * @implements IDeactivate
             * @constructor
             * @param {oip5.IDeactivate=} [properties] Properties to set
             */
            function Deactivate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Deactivate instance using the specified properties.
             * @function create
             * @memberof oip5.Deactivate
             * @static
             * @param {oip5.IDeactivate=} [properties] Properties to set
             * @returns {oip5.Deactivate} Deactivate instance
             */
            Deactivate.create = function create(properties) {
                return new Deactivate(properties);
            };
    
            /**
             * Encodes the specified Deactivate message. Does not implicitly {@link oip5.Deactivate.verify|verify} messages.
             * @function encode
             * @memberof oip5.Deactivate
             * @static
             * @param {oip5.IDeactivate} message Deactivate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deactivate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Deactivate message, length delimited. Does not implicitly {@link oip5.Deactivate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.Deactivate
             * @static
             * @param {oip5.IDeactivate} message Deactivate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deactivate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Deactivate message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.Deactivate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.Deactivate} Deactivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deactivate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.Deactivate();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Deactivate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.Deactivate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.Deactivate} Deactivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deactivate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Deactivate message.
             * @function verify
             * @memberof oip5.Deactivate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Deactivate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a Deactivate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.Deactivate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.Deactivate} Deactivate
             */
            Deactivate.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.Deactivate)
                    return object;
                return new $root.oip5.Deactivate();
            };
    
            /**
             * Creates a plain object from a Deactivate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.Deactivate
             * @static
             * @param {oip5.Deactivate} message Deactivate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Deactivate.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Deactivate to JSON.
             * @function toJSON
             * @memberof oip5.Deactivate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Deactivate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Deactivate;
        })();
    
        oip5.Edit = (function() {
    
            /**
             * Properties of an Edit.
             * @memberof oip5
             * @interface IEdit
             */
    
            /**
             * Constructs a new Edit.
             * @memberof oip5
             * @classdesc Represents an Edit.
             * @implements IEdit
             * @constructor
             * @param {oip5.IEdit=} [properties] Properties to set
             */
            function Edit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Edit instance using the specified properties.
             * @function create
             * @memberof oip5.Edit
             * @static
             * @param {oip5.IEdit=} [properties] Properties to set
             * @returns {oip5.Edit} Edit instance
             */
            Edit.create = function create(properties) {
                return new Edit(properties);
            };
    
            /**
             * Encodes the specified Edit message. Does not implicitly {@link oip5.Edit.verify|verify} messages.
             * @function encode
             * @memberof oip5.Edit
             * @static
             * @param {oip5.IEdit} message Edit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Edit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Edit message, length delimited. Does not implicitly {@link oip5.Edit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oip5.Edit
             * @static
             * @param {oip5.IEdit} message Edit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Edit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Edit message from the specified reader or buffer.
             * @function decode
             * @memberof oip5.Edit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oip5.Edit} Edit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Edit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.Edit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Edit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oip5.Edit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oip5.Edit} Edit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Edit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Edit message.
             * @function verify
             * @memberof oip5.Edit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Edit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates an Edit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oip5.Edit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oip5.Edit} Edit
             */
            Edit.fromObject = function fromObject(object) {
                if (object instanceof $root.oip5.Edit)
                    return object;
                return new $root.oip5.Edit();
            };
    
            /**
             * Creates a plain object from an Edit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oip5.Edit
             * @static
             * @param {oip5.Edit} message Edit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Edit.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Edit to JSON.
             * @function toJSON
             * @memberof oip5.Edit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Edit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Edit;
        })();
    
        oip5.record = (function() {
    
            /**
             * Namespace record.
             * @memberof oip5
             * @namespace
             */
            var record = {};
    
            record.RecordTemplateProto = (function() {
    
                /**
                 * Properties of a RecordTemplateProto.
                 * @memberof oip5.record
                 * @interface IRecordTemplateProto
                 * @property {string|null} [friendlyName] RecordTemplateProto friendlyName
                 * @property {string|null} [description] RecordTemplateProto description
                 * @property {Uint8Array|null} [DescriptorSetProto] RecordTemplateProto DescriptorSetProto
                 * @property {number|Long|null} [identifier] RecordTemplateProto identifier
                 * @property {Array.<number|Long>|null} [recommended] RecordTemplateProto recommended
                 * @property {Array.<number|Long>|null} [required] RecordTemplateProto required
                 */
    
                /**
                 * Constructs a new RecordTemplateProto.
                 * @memberof oip5.record
                 * @classdesc Represents a RecordTemplateProto.
                 * @implements IRecordTemplateProto
                 * @constructor
                 * @param {oip5.record.IRecordTemplateProto=} [properties] Properties to set
                 */
                function RecordTemplateProto(properties) {
                    this.recommended = [];
                    this.required = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RecordTemplateProto friendlyName.
                 * @member {string} friendlyName
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 */
                RecordTemplateProto.prototype.friendlyName = "";
    
                /**
                 * RecordTemplateProto description.
                 * @member {string} description
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 */
                RecordTemplateProto.prototype.description = "";
    
                /**
                 * RecordTemplateProto DescriptorSetProto.
                 * @member {Uint8Array} DescriptorSetProto
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 */
                RecordTemplateProto.prototype.DescriptorSetProto = $util.newBuffer([]);
    
                /**
                 * RecordTemplateProto identifier.
                 * @member {number|Long} identifier
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 */
                RecordTemplateProto.prototype.identifier = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * RecordTemplateProto recommended.
                 * @member {Array.<number|Long>} recommended
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 */
                RecordTemplateProto.prototype.recommended = $util.emptyArray;
    
                /**
                 * RecordTemplateProto required.
                 * @member {Array.<number|Long>} required
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 */
                RecordTemplateProto.prototype.required = $util.emptyArray;
    
                /**
                 * Creates a new RecordTemplateProto instance using the specified properties.
                 * @function create
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {oip5.record.IRecordTemplateProto=} [properties] Properties to set
                 * @returns {oip5.record.RecordTemplateProto} RecordTemplateProto instance
                 */
                RecordTemplateProto.create = function create(properties) {
                    return new RecordTemplateProto(properties);
                };
    
                /**
                 * Encodes the specified RecordTemplateProto message. Does not implicitly {@link oip5.record.RecordTemplateProto.verify|verify} messages.
                 * @function encode
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {oip5.record.IRecordTemplateProto} message RecordTemplateProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RecordTemplateProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.friendlyName != null && message.hasOwnProperty("friendlyName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.friendlyName);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    if (message.DescriptorSetProto != null && message.hasOwnProperty("DescriptorSetProto"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.DescriptorSetProto);
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        writer.uint32(/* id 10, wireType 1 =*/81).fixed64(message.identifier);
                    if (message.recommended != null && message.recommended.length) {
                        writer.uint32(/* id 11, wireType 2 =*/90).fork();
                        for (var i = 0; i < message.recommended.length; ++i)
                            writer.fixed64(message.recommended[i]);
                        writer.ldelim();
                    }
                    if (message.required != null && message.required.length) {
                        writer.uint32(/* id 12, wireType 2 =*/98).fork();
                        for (var i = 0; i < message.required.length; ++i)
                            writer.fixed64(message.required[i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified RecordTemplateProto message, length delimited. Does not implicitly {@link oip5.record.RecordTemplateProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {oip5.record.IRecordTemplateProto} message RecordTemplateProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RecordTemplateProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RecordTemplateProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {oip5.record.RecordTemplateProto} RecordTemplateProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RecordTemplateProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oip5.record.RecordTemplateProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.friendlyName = reader.string();
                            break;
                        case 2:
                            message.description = reader.string();
                            break;
                        case 4:
                            message.DescriptorSetProto = reader.bytes();
                            break;
                        case 10:
                            message.identifier = reader.fixed64();
                            break;
                        case 11:
                            if (!(message.recommended && message.recommended.length))
                                message.recommended = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.recommended.push(reader.fixed64());
                            } else
                                message.recommended.push(reader.fixed64());
                            break;
                        case 12:
                            if (!(message.required && message.required.length))
                                message.required = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.required.push(reader.fixed64());
                            } else
                                message.required.push(reader.fixed64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RecordTemplateProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {oip5.record.RecordTemplateProto} RecordTemplateProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RecordTemplateProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RecordTemplateProto message.
                 * @function verify
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RecordTemplateProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.friendlyName != null && message.hasOwnProperty("friendlyName"))
                        if (!$util.isString(message.friendlyName))
                            return "friendlyName: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.DescriptorSetProto != null && message.hasOwnProperty("DescriptorSetProto"))
                        if (!(message.DescriptorSetProto && typeof message.DescriptorSetProto.length === "number" || $util.isString(message.DescriptorSetProto)))
                            return "DescriptorSetProto: buffer expected";
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (!$util.isInteger(message.identifier) && !(message.identifier && $util.isInteger(message.identifier.low) && $util.isInteger(message.identifier.high)))
                            return "identifier: integer|Long expected";
                    if (message.recommended != null && message.hasOwnProperty("recommended")) {
                        if (!Array.isArray(message.recommended))
                            return "recommended: array expected";
                        for (var i = 0; i < message.recommended.length; ++i)
                            if (!$util.isInteger(message.recommended[i]) && !(message.recommended[i] && $util.isInteger(message.recommended[i].low) && $util.isInteger(message.recommended[i].high)))
                                return "recommended: integer|Long[] expected";
                    }
                    if (message.required != null && message.hasOwnProperty("required")) {
                        if (!Array.isArray(message.required))
                            return "required: array expected";
                        for (var i = 0; i < message.required.length; ++i)
                            if (!$util.isInteger(message.required[i]) && !(message.required[i] && $util.isInteger(message.required[i].low) && $util.isInteger(message.required[i].high)))
                                return "required: integer|Long[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a RecordTemplateProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {oip5.record.RecordTemplateProto} RecordTemplateProto
                 */
                RecordTemplateProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.oip5.record.RecordTemplateProto)
                        return object;
                    var message = new $root.oip5.record.RecordTemplateProto();
                    if (object.friendlyName != null)
                        message.friendlyName = String(object.friendlyName);
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.DescriptorSetProto != null)
                        if (typeof object.DescriptorSetProto === "string")
                            $util.base64.decode(object.DescriptorSetProto, message.DescriptorSetProto = $util.newBuffer($util.base64.length(object.DescriptorSetProto)), 0);
                        else if (object.DescriptorSetProto.length)
                            message.DescriptorSetProto = object.DescriptorSetProto;
                    if (object.identifier != null)
                        if ($util.Long)
                            (message.identifier = $util.Long.fromValue(object.identifier)).unsigned = false;
                        else if (typeof object.identifier === "string")
                            message.identifier = parseInt(object.identifier, 10);
                        else if (typeof object.identifier === "number")
                            message.identifier = object.identifier;
                        else if (typeof object.identifier === "object")
                            message.identifier = new $util.LongBits(object.identifier.low >>> 0, object.identifier.high >>> 0).toNumber();
                    if (object.recommended) {
                        if (!Array.isArray(object.recommended))
                            throw TypeError(".oip5.record.RecordTemplateProto.recommended: array expected");
                        message.recommended = [];
                        for (var i = 0; i < object.recommended.length; ++i)
                            if ($util.Long)
                                (message.recommended[i] = $util.Long.fromValue(object.recommended[i])).unsigned = false;
                            else if (typeof object.recommended[i] === "string")
                                message.recommended[i] = parseInt(object.recommended[i], 10);
                            else if (typeof object.recommended[i] === "number")
                                message.recommended[i] = object.recommended[i];
                            else if (typeof object.recommended[i] === "object")
                                message.recommended[i] = new $util.LongBits(object.recommended[i].low >>> 0, object.recommended[i].high >>> 0).toNumber();
                    }
                    if (object.required) {
                        if (!Array.isArray(object.required))
                            throw TypeError(".oip5.record.RecordTemplateProto.required: array expected");
                        message.required = [];
                        for (var i = 0; i < object.required.length; ++i)
                            if ($util.Long)
                                (message.required[i] = $util.Long.fromValue(object.required[i])).unsigned = false;
                            else if (typeof object.required[i] === "string")
                                message.required[i] = parseInt(object.required[i], 10);
                            else if (typeof object.required[i] === "number")
                                message.required[i] = object.required[i];
                            else if (typeof object.required[i] === "object")
                                message.required[i] = new $util.LongBits(object.required[i].low >>> 0, object.required[i].high >>> 0).toNumber();
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a RecordTemplateProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof oip5.record.RecordTemplateProto
                 * @static
                 * @param {oip5.record.RecordTemplateProto} message RecordTemplateProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RecordTemplateProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.recommended = [];
                        object.required = [];
                    }
                    if (options.defaults) {
                        object.friendlyName = "";
                        object.description = "";
                        if (options.bytes === String)
                            object.DescriptorSetProto = "";
                        else {
                            object.DescriptorSetProto = [];
                            if (options.bytes !== Array)
                                object.DescriptorSetProto = $util.newBuffer(object.DescriptorSetProto);
                        }
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.identifier = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.identifier = options.longs === String ? "0" : 0;
                    }
                    if (message.friendlyName != null && message.hasOwnProperty("friendlyName"))
                        object.friendlyName = message.friendlyName;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.DescriptorSetProto != null && message.hasOwnProperty("DescriptorSetProto"))
                        object.DescriptorSetProto = options.bytes === String ? $util.base64.encode(message.DescriptorSetProto, 0, message.DescriptorSetProto.length) : options.bytes === Array ? Array.prototype.slice.call(message.DescriptorSetProto) : message.DescriptorSetProto;
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (typeof message.identifier === "number")
                            object.identifier = options.longs === String ? String(message.identifier) : message.identifier;
                        else
                            object.identifier = options.longs === String ? $util.Long.prototype.toString.call(message.identifier) : options.longs === Number ? new $util.LongBits(message.identifier.low >>> 0, message.identifier.high >>> 0).toNumber() : message.identifier;
                    if (message.recommended && message.recommended.length) {
                        object.recommended = [];
                        for (var j = 0; j < message.recommended.length; ++j)
                            if (typeof message.recommended[j] === "number")
                                object.recommended[j] = options.longs === String ? String(message.recommended[j]) : message.recommended[j];
                            else
                                object.recommended[j] = options.longs === String ? $util.Long.prototype.toString.call(message.recommended[j]) : options.longs === Number ? new $util.LongBits(message.recommended[j].low >>> 0, message.recommended[j].high >>> 0).toNumber() : message.recommended[j];
                    }
                    if (message.required && message.required.length) {
                        object.required = [];
                        for (var j = 0; j < message.required.length; ++j)
                            if (typeof message.required[j] === "number")
                                object.required[j] = options.longs === String ? String(message.required[j]) : message.required[j];
                            else
                                object.required[j] = options.longs === String ? $util.Long.prototype.toString.call(message.required[j]) : options.longs === Number ? new $util.LongBits(message.required[j].low >>> 0, message.required[j].high >>> 0).toNumber() : message.required[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this RecordTemplateProto to JSON.
                 * @function toJSON
                 * @memberof oip5.record.RecordTemplateProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RecordTemplateProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return RecordTemplateProto;
            })();
    
            return record;
        })();
    
        return oip5;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Any = (function() {
    
                /**
                 * Properties of an Any.
                 * @memberof google.protobuf
                 * @interface IAny
                 * @property {string|null} [type_url] Any type_url
                 * @property {Uint8Array|null} [value] Any value
                 */
    
                /**
                 * Constructs a new Any.
                 * @memberof google.protobuf
                 * @classdesc Represents an Any.
                 * @implements IAny
                 * @constructor
                 * @param {google.protobuf.IAny=} [properties] Properties to set
                 */
                function Any(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Any type_url.
                 * @member {string} type_url
                 * @memberof google.protobuf.Any
                 * @instance
                 */
                Any.prototype.type_url = "";
    
                /**
                 * Any value.
                 * @member {Uint8Array} value
                 * @memberof google.protobuf.Any
                 * @instance
                 */
                Any.prototype.value = $util.newBuffer([]);
    
                /**
                 * Creates a new Any instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny=} [properties] Properties to set
                 * @returns {google.protobuf.Any} Any instance
                 */
                Any.create = function create(properties) {
                    return new Any(properties);
                };
    
                /**
                 * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny} message Any message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Any.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny} message Any message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Any.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Any message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Any} Any
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Any.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type_url = reader.string();
                            break;
                        case 2:
                            message.value = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Any message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Any} Any
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Any.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Any message.
                 * @function verify
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Any.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        if (!$util.isString(message.type_url))
                            return "type_url: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                            return "value: buffer expected";
                    return null;
                };
    
                /**
                 * Creates an Any message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Any} Any
                 */
                Any.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Any)
                        return object;
                    var message = new $root.google.protobuf.Any();
                    if (object.type_url != null)
                        message.type_url = String(object.type_url);
                    if (object.value != null)
                        if (typeof object.value === "string")
                            $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                        else if (object.value.length)
                            message.value = object.value;
                    return message;
                };
    
                /**
                 * Creates a plain object from an Any message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.Any} message Any
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Any.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type_url = "";
                        if (options.bytes === String)
                            object.value = "";
                        else {
                            object.value = [];
                            if (options.bytes !== Array)
                                object.value = $util.newBuffer(object.value);
                        }
                    }
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        object.type_url = message.type_url;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this Any to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Any
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Any.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Any;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.oipProto = (function() {
    
        /**
         * Namespace oipProto.
         * @exports oipProto
         * @namespace
         */
        var oipProto = {};
    
        oipProto.SignedMessage = (function() {
    
            /**
             * Properties of a SignedMessage.
             * @memberof oipProto
             * @interface ISignedMessage
             * @property {Uint8Array|null} [SerializedMessage] SignedMessage SerializedMessage
             * @property {oipProto.MessageTypes|null} [MessageType] SignedMessage MessageType
             * @property {oipProto.SignatureTypes|null} [SignatureType] SignedMessage SignatureType
             * @property {Uint8Array|null} [PubKey] SignedMessage PubKey
             * @property {Uint8Array|null} [Signature] SignedMessage Signature
             */
    
            /**
             * Constructs a new SignedMessage.
             * @memberof oipProto
             * @classdesc Represents a SignedMessage.
             * @implements ISignedMessage
             * @constructor
             * @param {oipProto.ISignedMessage=} [properties] Properties to set
             */
            function SignedMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SignedMessage SerializedMessage.
             * @member {Uint8Array} SerializedMessage
             * @memberof oipProto.SignedMessage
             * @instance
             */
            SignedMessage.prototype.SerializedMessage = $util.newBuffer([]);
    
            /**
             * SignedMessage MessageType.
             * @member {oipProto.MessageTypes} MessageType
             * @memberof oipProto.SignedMessage
             * @instance
             */
            SignedMessage.prototype.MessageType = 0;
    
            /**
             * SignedMessage SignatureType.
             * @member {oipProto.SignatureTypes} SignatureType
             * @memberof oipProto.SignedMessage
             * @instance
             */
            SignedMessage.prototype.SignatureType = 0;
    
            /**
             * SignedMessage PubKey.
             * @member {Uint8Array} PubKey
             * @memberof oipProto.SignedMessage
             * @instance
             */
            SignedMessage.prototype.PubKey = $util.newBuffer([]);
    
            /**
             * SignedMessage Signature.
             * @member {Uint8Array} Signature
             * @memberof oipProto.SignedMessage
             * @instance
             */
            SignedMessage.prototype.Signature = $util.newBuffer([]);
    
            /**
             * Creates a new SignedMessage instance using the specified properties.
             * @function create
             * @memberof oipProto.SignedMessage
             * @static
             * @param {oipProto.ISignedMessage=} [properties] Properties to set
             * @returns {oipProto.SignedMessage} SignedMessage instance
             */
            SignedMessage.create = function create(properties) {
                return new SignedMessage(properties);
            };
    
            /**
             * Encodes the specified SignedMessage message. Does not implicitly {@link oipProto.SignedMessage.verify|verify} messages.
             * @function encode
             * @memberof oipProto.SignedMessage
             * @static
             * @param {oipProto.ISignedMessage} message SignedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.SerializedMessage);
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MessageType);
                if (message.SignatureType != null && message.hasOwnProperty("SignatureType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SignatureType);
                if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.PubKey);
                if (message.Signature != null && message.hasOwnProperty("Signature"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.Signature);
                return writer;
            };
    
            /**
             * Encodes the specified SignedMessage message, length delimited. Does not implicitly {@link oipProto.SignedMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof oipProto.SignedMessage
             * @static
             * @param {oipProto.ISignedMessage} message SignedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SignedMessage message from the specified reader or buffer.
             * @function decode
             * @memberof oipProto.SignedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {oipProto.SignedMessage} SignedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.oipProto.SignedMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.SerializedMessage = reader.bytes();
                        break;
                    case 2:
                        message.MessageType = reader.int32();
                        break;
                    case 3:
                        message.SignatureType = reader.int32();
                        break;
                    case 4:
                        message.PubKey = reader.bytes();
                        break;
                    case 5:
                        message.Signature = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SignedMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof oipProto.SignedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {oipProto.SignedMessage} SignedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignedMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SignedMessage message.
             * @function verify
             * @memberof oipProto.SignedMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignedMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage"))
                    if (!(message.SerializedMessage && typeof message.SerializedMessage.length === "number" || $util.isString(message.SerializedMessage)))
                        return "SerializedMessage: buffer expected";
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    switch (message.MessageType) {
                    default:
                        return "MessageType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.SignatureType != null && message.hasOwnProperty("SignatureType"))
                    switch (message.SignatureType) {
                    default:
                        return "SignatureType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                    if (!(message.PubKey && typeof message.PubKey.length === "number" || $util.isString(message.PubKey)))
                        return "PubKey: buffer expected";
                if (message.Signature != null && message.hasOwnProperty("Signature"))
                    if (!(message.Signature && typeof message.Signature.length === "number" || $util.isString(message.Signature)))
                        return "Signature: buffer expected";
                return null;
            };
    
            /**
             * Creates a SignedMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof oipProto.SignedMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {oipProto.SignedMessage} SignedMessage
             */
            SignedMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.oipProto.SignedMessage)
                    return object;
                var message = new $root.oipProto.SignedMessage();
                if (object.SerializedMessage != null)
                    if (typeof object.SerializedMessage === "string")
                        $util.base64.decode(object.SerializedMessage, message.SerializedMessage = $util.newBuffer($util.base64.length(object.SerializedMessage)), 0);
                    else if (object.SerializedMessage.length)
                        message.SerializedMessage = object.SerializedMessage;
                switch (object.MessageType) {
                case "InvalidMessage":
                case 0:
                    message.MessageType = 0;
                    break;
                case "OIP05":
                case 1:
                    message.MessageType = 1;
                    break;
                case "Historian":
                case 2:
                    message.MessageType = 2;
                    break;
                case "Multipart":
                case 3:
                    message.MessageType = 3;
                    break;
                }
                switch (object.SignatureType) {
                case "InvalidSignature":
                case 0:
                    message.SignatureType = 0;
                    break;
                case "Flo":
                case 1:
                    message.SignatureType = 1;
                    break;
                case "Btc":
                case 2:
                    message.SignatureType = 2;
                    break;
                case "Rvn":
                case 3:
                    message.SignatureType = 3;
                    break;
                case "Tx":
                case 4:
                    message.SignatureType = 4;
                    break;
                }
                if (object.PubKey != null)
                    if (typeof object.PubKey === "string")
                        $util.base64.decode(object.PubKey, message.PubKey = $util.newBuffer($util.base64.length(object.PubKey)), 0);
                    else if (object.PubKey.length)
                        message.PubKey = object.PubKey;
                if (object.Signature != null)
                    if (typeof object.Signature === "string")
                        $util.base64.decode(object.Signature, message.Signature = $util.newBuffer($util.base64.length(object.Signature)), 0);
                    else if (object.Signature.length)
                        message.Signature = object.Signature;
                return message;
            };
    
            /**
             * Creates a plain object from a SignedMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof oipProto.SignedMessage
             * @static
             * @param {oipProto.SignedMessage} message SignedMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignedMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.SerializedMessage = "";
                    else {
                        object.SerializedMessage = [];
                        if (options.bytes !== Array)
                            object.SerializedMessage = $util.newBuffer(object.SerializedMessage);
                    }
                    object.MessageType = options.enums === String ? "InvalidMessage" : 0;
                    object.SignatureType = options.enums === String ? "InvalidSignature" : 0;
                    if (options.bytes === String)
                        object.PubKey = "";
                    else {
                        object.PubKey = [];
                        if (options.bytes !== Array)
                            object.PubKey = $util.newBuffer(object.PubKey);
                    }
                    if (options.bytes === String)
                        object.Signature = "";
                    else {
                        object.Signature = [];
                        if (options.bytes !== Array)
                            object.Signature = $util.newBuffer(object.Signature);
                    }
                }
                if (message.SerializedMessage != null && message.hasOwnProperty("SerializedMessage"))
                    object.SerializedMessage = options.bytes === String ? $util.base64.encode(message.SerializedMessage, 0, message.SerializedMessage.length) : options.bytes === Array ? Array.prototype.slice.call(message.SerializedMessage) : message.SerializedMessage;
                if (message.MessageType != null && message.hasOwnProperty("MessageType"))
                    object.MessageType = options.enums === String ? $root.oipProto.MessageTypes[message.MessageType] : message.MessageType;
                if (message.SignatureType != null && message.hasOwnProperty("SignatureType"))
                    object.SignatureType = options.enums === String ? $root.oipProto.SignatureTypes[message.SignatureType] : message.SignatureType;
                if (message.PubKey != null && message.hasOwnProperty("PubKey"))
                    object.PubKey = options.bytes === String ? $util.base64.encode(message.PubKey, 0, message.PubKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.PubKey) : message.PubKey;
                if (message.Signature != null && message.hasOwnProperty("Signature"))
                    object.Signature = options.bytes === String ? $util.base64.encode(message.Signature, 0, message.Signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.Signature) : message.Signature;
                return object;
            };
    
            /**
             * Converts this SignedMessage to JSON.
             * @function toJSON
             * @memberof oipProto.SignedMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SignedMessage;
        })();
    
        /**
         * MessageTypes enum.
         * @name oipProto.MessageTypes
         * @enum {string}
         * @property {number} InvalidMessage=0 InvalidMessage value
         * @property {number} OIP05=1 OIP05 value
         * @property {number} Historian=2 Historian value
         * @property {number} Multipart=3 Multipart value
         */
        oipProto.MessageTypes = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "InvalidMessage"] = 0;
            values[valuesById[1] = "OIP05"] = 1;
            values[valuesById[2] = "Historian"] = 2;
            values[valuesById[3] = "Multipart"] = 3;
            return values;
        })();
    
        /**
         * SignatureTypes enum.
         * @name oipProto.SignatureTypes
         * @enum {string}
         * @property {number} InvalidSignature=0 InvalidSignature value
         * @property {number} Flo=1 Flo value
         * @property {number} Btc=2 Btc value
         * @property {number} Rvn=3 Rvn value
         * @property {number} Tx=4 Tx value
         */
        oipProto.SignatureTypes = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "InvalidSignature"] = 0;
            values[valuesById[1] = "Flo"] = 1;
            values[valuesById[2] = "Btc"] = 2;
            values[valuesById[3] = "Rvn"] = 3;
            values[valuesById[4] = "Tx"] = 4;
            return values;
        })();
    
        return oipProto;
    })();

    return $root;
});
