import jwtDecode from 'jwt-decode'
import { AuthenticationRepository } from '../repositories/AuthenticationRepository'
import { InvalidAccessTokenError, InvalidRefreshTokenError } from './errors/AuthenticationServiceError'
import { AuthenticationService } from './AuthenticationService'

export class Token {
    token: string;
    constructor(token: string) {
        this.token = token;
    }
}

export interface ExpirableTokenOpt {
    token: string;
    exp: number;
}

export class ExpirableToken extends Token {
    exp: number;
    constructor({token, exp}: ExpirableTokenOpt) {
        super(token)
        this.exp = exp
    }

    expired(date: number | null = null): boolean {
        if (date == null) {
            date = (new Date()).getTime()
        }
        return date < this.exp
    }
}


export class AccessToken extends ExpirableToken {
}

export class RefreshToken extends ExpirableToken {
}

export class TokenService {

    expiredMarginSecond = 5

    public async getAccessToken(): Promise<AccessToken> {
        let jwt = await AuthenticationRepository.getAccessTokenJWT()
        if (jwt == null) {
            throw new InvalidAccessTokenError()
        }
        let token = new AccessToken({
            ...jwtDecode(jwt),
            token: jwt,
        })
        // 期限切れの場合は更新する
        // 余裕を持って有効期限を比較する（API通信経路のラグを考慮する）
        const time = (new Date()).getTime() + this.expiredMarginSecond
        if (token.expired(time)) {
            await this.refreshAccessToken()

            // リフレッシュ後のトークンを取得
            jwt = await AuthenticationRepository.getAccessTokenJWT()
            if (jwt == null) {
                throw new InvalidAccessTokenError()
            }
            token = new AccessToken(jwtDecode(jwt))
            if (token.expired()) {
                throw new InvalidAccessTokenError()
            }
        }
        return token
    }

    public async getRefreshToken(): Promise<RefreshToken> {
        const jwt = await AuthenticationRepository.getRefreshTokenJWT()
        if (jwt == null) {
            throw new InvalidRefreshTokenError()
        }
        const token = new RefreshToken({
            ...jwtDecode(jwt),
            token: jwt,
        })
        console.log(2, jwtDecode(jwt), token, token.expired())
        if (token.expired()) {
            throw new InvalidRefreshTokenError()
        }
        return token
    }

    public async refreshAccessToken(): Promise<void> {
        const refreshToken = await this.getRefreshToken()
        const authService = new AuthenticationService()
        const result = await authService.refreshAccessToken(refreshToken.token)
        await this.setAccessToken(result.accessToken)
    }

    public async setAccessToken(token: string): Promise<void> {
        await AuthenticationRepository.setAccessTokenJWT(token)
    }

    public async setRefreshToken(token: string): Promise<void> {
        await AuthenticationRepository.setRefreshTokenJWT(token)
    }


}