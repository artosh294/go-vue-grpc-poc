import { LocalStorageKey } from '../configs/LocalStorageKey'

export class AuthenticationRepository {
    static async setAccessTokenJWT(token: string): Promise<void> {
        localStorage.setItem(LocalStorageKey.AccessTokenJWT, token)
    }

    static async getAccessTokenJWT(): Promise<string | null> {
        return localStorage.getItem(LocalStorageKey.AccessTokenJWT)
    }

    static async setRefreshTokenJWT(token: string): Promise<void> {
        localStorage.setItem(LocalStorageKey.RefreshTokenJWT, token)
    }

    static async getRefreshTokenJWT(): Promise<string|null> {
        return localStorage.getItem(LocalStorageKey.RefreshTokenJWT)
    }
}