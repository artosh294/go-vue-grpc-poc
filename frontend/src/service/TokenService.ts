import jwtDecode from 'jwt-decode'
import { AuthenticationRepository } from '../repositories/AuthenticationRepository'
import { InvalidAccessTokenError, InvalidRefreshTokenError } from './errors/AuthenticationServiceError'
import { AuthenticationService } from './AuthenticationService'

export interface BearerHeader {
    Authorization: string;
}

// トークン
export class Token {
    token: string;
    constructor(token: string) {
        this.token = token;
    }

    // 認証ヘッダーを生成する
    makeBearerHeader(): BearerHeader {
        return {
            Authorization: `bearer ${this.token}`,
        }
    }
}

export interface ExpirableTokenOpt {
    token: string;
    exp: number;
}

// 有効期限付きトークン
export class ExpirableToken extends Token {
    exp: number;
    constructor({token, exp}: ExpirableTokenOpt) {
        super(token)
        this.exp = exp
    }

    // トークンの有効期限が切れているかどうか
    expired(date: number | null = null): boolean {
        if (date == null) {
            // getTimeはUnixtimeのミリ秒を返すので、秒に変換
            date = (new Date()).getTime() / 1000
        }
        return this.exp < date
    }
}


export class AccessToken extends ExpirableToken {
}

export class RefreshToken extends ExpirableToken {
}

export class TokenService {

    // アクセストークンの猶予秒数
    expiredMarginSecond = 5

    // アクセストークンの取得
    public async getAccessToken(): Promise<AccessToken> {
        // リポジトリからJWT（テキスト）を取得しパースする
        // その際に検証は行わない（間違ったトークンだったらサーバーで弾かれる＋ハッシュキーは漏洩させたくないので）
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
        const time = ((new Date()).getTime() / 1000) + this.expiredMarginSecond
        if (token.expired(time)) {
            // リフレッシュトークンを使用しアクセストークンを更新する
            await this.refreshAccessToken()

            // リフレッシュ後のトークンを取得
            jwt = await AuthenticationRepository.getAccessTokenJWT()
            if (jwt == null) {
                throw new InvalidAccessTokenError()
            }
            token = new AccessToken({
                ...jwtDecode(jwt),
                token: jwt,
            })
            if (token.expired()) {
                throw new InvalidAccessTokenError()
            }
        }
        return token
    }

    // リフレッシュトークンの取得
    public async getRefreshToken(): Promise<RefreshToken> {
        const jwt = await AuthenticationRepository.getRefreshTokenJWT()
        if (jwt == null) {
            throw new InvalidRefreshTokenError()
        }
        const token = new RefreshToken({
            ...jwtDecode(jwt),
            token: jwt,
        })
        if (token.expired()) {
            throw new InvalidRefreshTokenError()
        }
        return token
    }

    // アクセストークンを新しいものに変更する
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