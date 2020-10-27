export class InvalidTokenError extends Error {
}

export class InvalidAccessTokenError extends InvalidTokenError {

}

export class InvalidRefreshTokenError extends InvalidTokenError {
    
}