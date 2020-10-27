package server

import (
	"context"
	"fmt"
	"time"

	"github.com/artosh294/go-vue-grpc-poc/protobuf/authentication"

	jwt "github.com/dgrijalva/jwt-go"
)

const SIGNKEY = "hkyt"

type AuthenticationServer struct {
	authentication.UnimplementedAuthenticationServer
}

func (s *AuthenticationServer) Login(ctx context.Context, in *authentication.LoginRequest) (*authentication.LoginResponse, error) {

	loginId := in.GetLoginId()
	password := in.GetPassword()
	fmt.Println("loginId: ", loginId)
	fmt.Println("password: ", password)

	accessToken := jwt.New(jwt.SigningMethodHS256)
	accessClaims := accessToken.Claims.(jwt.MapClaims)
	accessClaims["id"] = 123
	accessClaims["iat"] = time.Now()
	accessClaims["type"] = "access"
	accessClaims["exp"] = time.Now().Add(time.Minute * 10).Unix()
	accessTokenString, _ := accessToken.SignedString([]byte(SIGNKEY))

	refreshToken := jwt.New(jwt.SigningMethodHS256)
	refreshClaims := refreshToken.Claims.(jwt.MapClaims)
	refreshClaims["id"] = 123
	refreshClaims["iat"] = time.Now()
	refreshClaims["type"] = "refresh"
	refreshClaims["exp"] = time.Now().Add(time.Hour * 1).Unix()
	refreshTokenString, _ := refreshToken.SignedString([]byte(SIGNKEY))

	fmt.Println(accessTokenString, refreshTokenString)

	response := authentication.LoginResponse{
		AccessToken:  accessTokenString,
		RefreshToken: refreshTokenString,
	}

	return &response, nil
}

func (s *AuthenticationServer) RefreshAccessToken(ctx context.Context, in *authentication.RefreshAccessTokenRequest) (*authentication.RefreshAccessTokenResponse, error) {
	return nil, nil
}
