import * as jspb from 'google-protobuf'



export class ChatRequest extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): ChatRequest;

  getMessage(): string;
  setMessage(value: string): ChatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChatRequest): ChatRequest.AsObject;
  static serializeBinaryToWriter(message: ChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatRequest;
  static deserializeBinaryFromReader(message: ChatRequest, reader: jspb.BinaryReader): ChatRequest;
}

export namespace ChatRequest {
  export type AsObject = {
    room: string,
    message: string,
  }
}

export class ChatReply extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): ChatReply;

  getDate(): string;
  setDate(value: string): ChatReply;

  getName(): string;
  setName(value: string): ChatReply;

  getMessage(): string;
  setMessage(value: string): ChatReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatReply.AsObject;
  static toObject(includeInstance: boolean, msg: ChatReply): ChatReply.AsObject;
  static serializeBinaryToWriter(message: ChatReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatReply;
  static deserializeBinaryFromReader(message: ChatReply, reader: jspb.BinaryReader): ChatReply;
}

export namespace ChatReply {
  export type AsObject = {
    room: string,
    date: string,
    name: string,
    message: string,
  }
}

export class SpectatorRequest extends jspb.Message {
  getRoom(): string;
  setRoom(value: string): SpectatorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpectatorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SpectatorRequest): SpectatorRequest.AsObject;
  static serializeBinaryToWriter(message: SpectatorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpectatorRequest;
  static deserializeBinaryFromReader(message: SpectatorRequest, reader: jspb.BinaryReader): SpectatorRequest;
}

export namespace SpectatorRequest {
  export type AsObject = {
    room: string,
  }
}

export class SpeecherResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeecherResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SpeecherResponse): SpeecherResponse.AsObject;
  static serializeBinaryToWriter(message: SpeecherResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeecherResponse;
  static deserializeBinaryFromReader(message: SpeecherResponse, reader: jspb.BinaryReader): SpeecherResponse;
}

export namespace SpeecherResponse {
  export type AsObject = {
  }
}

export class SpeakResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeakResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SpeakResponse): SpeakResponse.AsObject;
  static serializeBinaryToWriter(message: SpeakResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpeakResponse;
  static deserializeBinaryFromReader(message: SpeakResponse, reader: jspb.BinaryReader): SpeakResponse;
}

export namespace SpeakResponse {
  export type AsObject = {
  }
}

