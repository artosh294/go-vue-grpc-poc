import * as jspb from 'google-protobuf'



export class LoginRequest extends jspb.Message {
  getLoginid(): string;
  setLoginid(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    loginid: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): LoginResponse;

  getAccesstokenexpiresin(): number;
  setAccesstokenexpiresin(value: number): LoginResponse;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): LoginResponse;

  getRefreshtokenexpiresin(): number;
  setRefreshtokenexpiresin(value: number): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    accesstoken: string,
    accesstokenexpiresin: number,
    refreshtoken: string,
    refreshtokenexpiresin: number,
  }
}

export class RefreshAccessTokenRequest extends jspb.Message {
  getRefreshtoken(): string;
  setRefreshtoken(value: string): RefreshAccessTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshAccessTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshAccessTokenRequest): RefreshAccessTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshAccessTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshAccessTokenRequest;
  static deserializeBinaryFromReader(message: RefreshAccessTokenRequest, reader: jspb.BinaryReader): RefreshAccessTokenRequest;
}

export namespace RefreshAccessTokenRequest {
  export type AsObject = {
    refreshtoken: string,
  }
}

export class RefreshAccessTokenResponse extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): RefreshAccessTokenResponse;

  getAccesstokenexpiresin(): number;
  setAccesstokenexpiresin(value: number): RefreshAccessTokenResponse;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): RefreshAccessTokenResponse;

  getRefreshtokenexpiresin(): number;
  setRefreshtokenexpiresin(value: number): RefreshAccessTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshAccessTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshAccessTokenResponse): RefreshAccessTokenResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshAccessTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshAccessTokenResponse;
  static deserializeBinaryFromReader(message: RefreshAccessTokenResponse, reader: jspb.BinaryReader): RefreshAccessTokenResponse;
}

export namespace RefreshAccessTokenResponse {
  export type AsObject = {
    accesstoken: string,
    accesstokenexpiresin: number,
    refreshtoken: string,
    refreshtokenexpiresin: number,
  }
}

