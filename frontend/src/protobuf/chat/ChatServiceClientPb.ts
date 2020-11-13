/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chat_pb from './chat_pb';


export class ChatClient {
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

  methodInfoSpectator = new grpcWeb.AbstractClientBase.MethodInfo(
    chat_pb.ChatReply,
    (request: chat_pb.SpectatorRequest) => {
      return request.serializeBinary();
    },
    chat_pb.ChatReply.deserializeBinary
  );

  spectator(
    request: chat_pb.SpectatorRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chat.Chat/Spectator',
      request,
      metadata || {},
      this.methodInfoSpectator);
  }

  methodInfoSpeak = new grpcWeb.AbstractClientBase.MethodInfo(
    chat_pb.SpeakResponse,
    (request: chat_pb.ChatRequest) => {
      return request.serializeBinary();
    },
    chat_pb.SpeakResponse.deserializeBinary
  );

  speak(
    request: chat_pb.ChatRequest,
    metadata: grpcWeb.Metadata | null): Promise<chat_pb.SpeakResponse>;

  speak(
    request: chat_pb.ChatRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: chat_pb.SpeakResponse) => void): grpcWeb.ClientReadableStream<chat_pb.SpeakResponse>;

  speak(
    request: chat_pb.ChatRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: chat_pb.SpeakResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chat.Chat/Speak',
        request,
        metadata || {},
        this.methodInfoSpeak,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chat.Chat/Speak',
    request,
    metadata || {},
    this.methodInfoSpeak);
  }

}

