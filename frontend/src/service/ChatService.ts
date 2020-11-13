import { ClientReadableStream, Error as GrpcError, Status, Metadata } from 'grpc-web'
import { ChatClient,  } from '../protobuf/chat/ChatServiceClientPb'
import { ChatRequest, SpectatorRequest } from '../protobuf/chat/chat_pb'
import { TokenService } from './TokenService'

export interface SpeakMessage {
    room: string;
    message: string;
}

export interface SpectatorOpts {
    room: string;
}

export interface SpectatorStreamOpts {
    stream: ClientReadableStream<ChatRequest>;
}
export interface SpectatorStreamOnDataResponse {
    message: string;
}
export interface SpectatorStreamOnStatusResponse {
    code: number;
    details: string;
    metadata?: SpectatorStreamOnMetadataResponse;
}
export interface SpectatorStreamOnMetadataResponse {
    [index: string]: string;
}
type SpectatorStreamOnDataCallback = (response: SpectatorStreamOnDataResponse) => void;
type SpectatorStreamOnStatusCallback = (status: SpectatorStreamOnStatusResponse) => void;
type SpectatorStreamOnMetadataCallback = (metadata: SpectatorStreamOnMetadataResponse) => void;
type SpectatorStreamOnEndCallback = () => void;
type SpectatorStreamOnErrorCallback = (err: Error) => void;
type SpectatorStreamOnCallback = SpectatorStreamOnDataCallback |
 SpectatorStreamOnStatusCallback | 
 SpectatorStreamOnMetadataCallback |
 SpectatorStreamOnEndCallback |
 SpectatorStreamOnErrorCallback

interface HandleFunctionMap {
    [eventType: string]: Map<SpectatorStreamOnCallback, any[]>;
}

export class SpectatorStream {

    handleFunctions: HandleFunctionMap = {}
    stream: ClientReadableStream<ChatRequest>

    constructor({stream}: SpectatorStreamOpts) {
        this.stream = stream
    }

    registHandler(eventType: string, callback: SpectatorStreamOnCallback, handler: any) {
        if (!this.handleFunctions[eventType]) {
            this.handleFunctions[eventType] = new Map<SpectatorStreamOnCallback, any[]>();
        }

        const handlers = this.handleFunctions[eventType].get(callback) || []
        handlers.push(handler)
        this.handleFunctions[eventType].set(callback, handlers)
    }

    removeHandler(eventType: string, callback: SpectatorStreamOnCallback) {

        console.log("SpectatorStream::removevHandler", eventType, callback)
        if (!this.handleFunctions[eventType]) {
            return
        }

        const handlers = this.handleFunctions[eventType].get(callback) || []
        if (handlers.length <= 0) {
            return
        }

        const rmHandler = handlers.pop()
        // @ts-ignore
        this.stream.removeListener(eventType, rmHandler)
        this.handleFunctions[eventType].set(callback, handlers)
        console.log("rmHandler", rmHandler, this.handleFunctions)

    }

    on(eventType: "data", callback: SpectatorStreamOnDataCallback): void;
    on(eventType: "status", callback: SpectatorStreamOnStatusCallback): void;
    on(eventType: "metadata", callback: SpectatorStreamOnMetadataCallback): void;
    on(eventType: "end", callback: SpectatorStreamOnEndCallback): void;
    on(eventType: "error", callback: (err: Error) => void): void;
    on(eventType: string, callback: SpectatorStreamOnCallback) {

        switch(eventType) {
            case "data":
                {
                    const dataHandler = (response: ChatRequest) => {
                        (callback as SpectatorStreamOnDataCallback)({
                            message: response.getMessage()
                        })
                    }
                    this.stream.on("data", dataHandler)
                    this.registHandler("data", callback, dataHandler)
                    break;
                }
            case "status":
                {
                    const statusHandler = (status: Status) => {
                        (callback as SpectatorStreamOnStatusCallback)({
                            ...status
                        })
                    }
                    this.stream.on("status", statusHandler)
                    this.registHandler("status", callback, statusHandler)
                    break;
                }
            case "metadata":
                {
                    const metadataHandler = (metadata: Metadata) => {
                        (callback as SpectatorStreamOnMetadataCallback)({
                            ...metadata
                        })
                    }
                    this.stream.on("metadata", metadataHandler)
                    this.registHandler("metadata", callback, metadataHandler)
                    break;
                }
            case "end":
                {
                    const endHandler = () => {
                        (callback as SpectatorStreamOnEndCallback)()
                    }
                    this.stream.on("end", endHandler)
                    this.registHandler("end", callback, endHandler)
                    break;
                }
            case "error":
                {
                    const errorHandler = (err: GrpcError) => {
                        (callback as SpectatorStreamOnErrorCallback)(new Error(err.message))
                    }
                    this.stream.on("error", errorHandler)
                    this.registHandler("error", callback, errorHandler)
                    break;
                }
        }
    }


    removeListener(eventType: "data", callback: SpectatorStreamOnDataCallback): void;
    removeListener(eventType: "status", callback: SpectatorStreamOnStatusCallback): void;
    removeListener(eventType: "metadata", callback: SpectatorStreamOnMetadataCallback): void;
    removeListener(eventType: "end", callback: SpectatorStreamOnEndCallback): void;
    removeListener(eventType: "error", callback: (err: Error) => void): void;
    removeListener(eventType: string, callback: SpectatorStreamOnCallback) {
        switch(eventType) {
            case "data":
                this.removeHandler("data", callback)
                break;
            case "status":
                this.removeHandler("status", callback)
                break;
            case "metadata":
                this.removeHandler("metadata", callback)
                break;
            case "end":
                this.removeHandler("end", callback)
                break
            case "error":
                this.removeHandler("error", callback)
                break;
        }
    }

    close() {
        this.stream.cancel()
    }
    
}

export class ChatService {

    async speak(msg: SpeakMessage): Promise<void> {
        const hostname = "http://localhost:8001"
        const client = new ChatClient(hostname)
        const request = new ChatRequest()
        request.setMessage(msg.message)
        request.setRoom(msg.room)

        const tokenService = new TokenService()
        const accessToken = await tokenService.getAccessToken()

        await client.speak(request, {
            ...accessToken.makeBearerHeader(),
            // "grpc-timeout": "1",
        })
    }

    async spectator(opts: SpectatorOpts): Promise<SpectatorStream> {
        const hostname = "http://localhost:8001"
        const client = new ChatClient(hostname)
        const request = new SpectatorRequest()
        request.setRoom(opts.room)

        const tokenService = new TokenService()
        const accessToken = await tokenService.getAccessToken()

        const stream = await client.spectator(request, {
            ...accessToken.makeBearerHeader(),
            // "grpc-timeout": "1",
        })
        return new SpectatorStream({
            stream: stream as ClientReadableStream<ChatRequest>
        })
    }

}