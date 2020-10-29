import { EchoClient } from '../protobuf/echo/EchoServiceClientPb'
import { EchoRequest } from '../protobuf/echo/echo_pb'
import { TokenService } from './TokenService'

interface EchoResult {
    message: string;
}

export class EchoService {

    async echo(message: string): Promise<EchoResult> {
        const hostname = "http://localhost:8001"
        const client = new EchoClient(hostname)
        const request = new EchoRequest()
        request.setName(message)

        const tokenService = new TokenService()
        const accessToken = await tokenService.getAccessToken()

        const response = await client.echo(request, {
            ...accessToken.makeBearerHeader(),
        })

        return {
            message: response.getMessage()
        }
    }

}