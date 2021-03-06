// source: authentication.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.authentication.LoginRequest', null, global);
goog.exportSymbol('proto.authentication.LoginResponse', null, global);
goog.exportSymbol('proto.authentication.RefreshAccessTokenRequest', null, global);
goog.exportSymbol('proto.authentication.RefreshAccessTokenResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.authentication.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.authentication.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.authentication.LoginRequest.displayName = 'proto.authentication.LoginRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.authentication.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.authentication.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.authentication.LoginResponse.displayName = 'proto.authentication.LoginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.authentication.RefreshAccessTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.authentication.RefreshAccessTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.authentication.RefreshAccessTokenRequest.displayName = 'proto.authentication.RefreshAccessTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.authentication.RefreshAccessTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.authentication.RefreshAccessTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.authentication.RefreshAccessTokenResponse.displayName = 'proto.authentication.RefreshAccessTokenResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.authentication.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.authentication.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.authentication.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    loginid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.authentication.LoginRequest}
 */
proto.authentication.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.authentication.LoginRequest;
  return proto.authentication.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.authentication.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.authentication.LoginRequest}
 */
proto.authentication.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoginid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.authentication.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.authentication.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.authentication.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLoginid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string loginId = 1;
 * @return {string}
 */
proto.authentication.LoginRequest.prototype.getLoginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.LoginRequest} returns this
 */
proto.authentication.LoginRequest.prototype.setLoginid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.authentication.LoginRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.LoginRequest} returns this
 */
proto.authentication.LoginRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.authentication.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.authentication.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.authentication.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accesstoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accesstokenexpiresin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    refreshtoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refreshtokenexpiresin: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.authentication.LoginResponse}
 */
proto.authentication.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.authentication.LoginResponse;
  return proto.authentication.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.authentication.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.authentication.LoginResponse}
 */
proto.authentication.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccesstokenexpiresin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefreshtokenexpiresin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.authentication.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.authentication.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.authentication.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccesstoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccesstokenexpiresin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRefreshtoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefreshtokenexpiresin();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string accessToken = 1;
 * @return {string}
 */
proto.authentication.LoginResponse.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.LoginResponse} returns this
 */
proto.authentication.LoginResponse.prototype.setAccesstoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 accessTokenExpiresIn = 2;
 * @return {number}
 */
proto.authentication.LoginResponse.prototype.getAccesstokenexpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.authentication.LoginResponse} returns this
 */
proto.authentication.LoginResponse.prototype.setAccesstokenexpiresin = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string refreshToken = 3;
 * @return {string}
 */
proto.authentication.LoginResponse.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.LoginResponse} returns this
 */
proto.authentication.LoginResponse.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 refreshTokenExpiresIn = 4;
 * @return {number}
 */
proto.authentication.LoginResponse.prototype.getRefreshtokenexpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.authentication.LoginResponse} returns this
 */
proto.authentication.LoginResponse.prototype.setRefreshtokenexpiresin = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.authentication.RefreshAccessTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.authentication.RefreshAccessTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.authentication.RefreshAccessTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.RefreshAccessTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refreshtoken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.authentication.RefreshAccessTokenRequest}
 */
proto.authentication.RefreshAccessTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.authentication.RefreshAccessTokenRequest;
  return proto.authentication.RefreshAccessTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.authentication.RefreshAccessTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.authentication.RefreshAccessTokenRequest}
 */
proto.authentication.RefreshAccessTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.authentication.RefreshAccessTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.authentication.RefreshAccessTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.authentication.RefreshAccessTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.RefreshAccessTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshtoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string refreshToken = 1;
 * @return {string}
 */
proto.authentication.RefreshAccessTokenRequest.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.RefreshAccessTokenRequest} returns this
 */
proto.authentication.RefreshAccessTokenRequest.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.authentication.RefreshAccessTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.authentication.RefreshAccessTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.authentication.RefreshAccessTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.RefreshAccessTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accesstoken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accesstokenexpiresin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    refreshtoken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refreshtokenexpiresin: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.authentication.RefreshAccessTokenResponse}
 */
proto.authentication.RefreshAccessTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.authentication.RefreshAccessTokenResponse;
  return proto.authentication.RefreshAccessTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.authentication.RefreshAccessTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.authentication.RefreshAccessTokenResponse}
 */
proto.authentication.RefreshAccessTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccesstokenexpiresin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefreshtoken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefreshtokenexpiresin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.authentication.RefreshAccessTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.authentication.RefreshAccessTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.authentication.RefreshAccessTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.authentication.RefreshAccessTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccesstoken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccesstokenexpiresin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRefreshtoken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefreshtokenexpiresin();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string accessToken = 1;
 * @return {string}
 */
proto.authentication.RefreshAccessTokenResponse.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.RefreshAccessTokenResponse} returns this
 */
proto.authentication.RefreshAccessTokenResponse.prototype.setAccesstoken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 accessTokenExpiresIn = 2;
 * @return {number}
 */
proto.authentication.RefreshAccessTokenResponse.prototype.getAccesstokenexpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.authentication.RefreshAccessTokenResponse} returns this
 */
proto.authentication.RefreshAccessTokenResponse.prototype.setAccesstokenexpiresin = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string refreshToken = 3;
 * @return {string}
 */
proto.authentication.RefreshAccessTokenResponse.prototype.getRefreshtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.authentication.RefreshAccessTokenResponse} returns this
 */
proto.authentication.RefreshAccessTokenResponse.prototype.setRefreshtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 refreshTokenExpiresIn = 4;
 * @return {number}
 */
proto.authentication.RefreshAccessTokenResponse.prototype.getRefreshtokenexpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.authentication.RefreshAccessTokenResponse} returns this
 */
proto.authentication.RefreshAccessTokenResponse.prototype.setRefreshtokenexpiresin = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.authentication);
