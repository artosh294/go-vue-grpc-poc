import { AuthenticationClient } from '../protobuf/authentication/AuthenticationServiceClientPb'
import { LoginRequest, RefreshAccessTokenRequest } from '../protobuf/authentication/authentication_pb'
import { TokenService } from './TokenService'

interface LoginResult {
    accessToken: string;
    refreshToken: string;
}

interface RefreshAccessTokenResult {
    accessToken: string;
}

export class AuthenticationService {

    async login(loginId: string, password: string): Promise<LoginResult> {
        const hostname = "http://localhost:8001"
        const client = new AuthenticationClient(hostname)
        const request = new LoginRequest()
        request.setLoginid(loginId)
        request.setPassword(password)

        const response = await client.login(request, {})

        const tokenService = new TokenService()
        await tokenService.setAccessToken(response.getAccesstoken())
        await tokenService.setRefreshToken(response.getRefreshtoken())

        return {
            accessToken: response.getAccesstoken(),
            refreshToken: response.getRefreshtoken(),
        }
    }

    async refreshAccessToken(token: string): Promise<RefreshAccessTokenResult> {
        const hostname = "http://localhost:8001"
        const client = new AuthenticationClient(hostname)
        const request = new RefreshAccessTokenRequest()

        const tokenService = new TokenService()
        const refreshToken = await tokenService.getRefreshToken()
        request.setRefreshtoken(refreshToken.token);

        const response = await client.refreshAccessToken(request, {
        })

        return {
            accessToken: response.getAccesstoken(),
        }
    }

}