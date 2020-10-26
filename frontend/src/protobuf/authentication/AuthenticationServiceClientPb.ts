/**
 * @fileoverview gRPC-Web generated client stub for authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as authentication_pb from './authentication_pb';


export class AuthenticationClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.LoginResponse,
    (request: authentication_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    authentication_pb.LoginResponse.deserializeBinary
  );

  login(
    request: authentication_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.LoginResponse>;

  login(
    request: authentication_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.LoginResponse>;

  login(
    request: authentication_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.Authentication/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.Authentication/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoRefreshAccessToken = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.RefreshAccessTokenResponse,
    (request: authentication_pb.RefreshAccessTokenRequest) => {
      return request.serializeBinary();
    },
    authentication_pb.RefreshAccessTokenResponse.deserializeBinary
  );

  refreshAccessToken(
    request: authentication_pb.RefreshAccessTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.RefreshAccessTokenResponse>;

  refreshAccessToken(
    request: authentication_pb.RefreshAccessTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.RefreshAccessTokenResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.RefreshAccessTokenResponse>;

  refreshAccessToken(
    request: authentication_pb.RefreshAccessTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.RefreshAccessTokenResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.Authentication/RefreshAccessToken',
        request,
        metadata || {},
        this.methodInfoRefreshAccessToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.Authentication/RefreshAccessToken',
    request,
    metadata || {},
    this.methodInfoRefreshAccessToken);
  }

}

