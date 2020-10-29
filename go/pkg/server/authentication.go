package server

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/artosh294/go-vue-grpc-poc/protobuf/authentication"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"

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

	if loginId != "hkyt" {
		return nil, status.Errorf(codes.Unauthenticated, "Invalid request")
	}

	if password != "hkyt" {
		return nil, status.Errorf(codes.Unauthenticated, "Invalid request")
	}

	accessToken := jwt.New(jwt.SigningMethodHS256)
	accessClaims := accessToken.Claims.(jwt.MapClaims)
	accessClaims["id"] = 123
	accessClaims["iat"] = time.Now()
	accessClaims["type"] = "access"
	accessClaims["exp"] = time.Now().Add(time.Minute * 1).Unix()
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

	// log.Printf("Received: %v", in.GetName())
	// md, ok := metadata.FromIncomingContext(ctx)
	// auth := md.Get("Authorization")
	// log.Println("ok", ok)

	auth := in.GetRefreshToken()
	log.Println("Authorization", auth)

	token, err := jwt.Parse(auth, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(SIGNKEY), nil
	})

	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, err.Error())
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok && !token.Valid {
		return nil, status.Errorf(codes.Unauthenticated, "Invalid token")
	}

	fmt.Println(claims)

	// リフレッシュトークンじゃない場合はエラー
	if claims["type"] != "refresh" {
		return nil, status.Errorf(codes.Unauthenticated, "Invalid token")
	}

	accessToken := jwt.New(jwt.SigningMethodHS256)
	accessClaims := accessToken.Claims.(jwt.MapClaims)
	accessClaims["id"] = 123
	accessClaims["iat"] = time.Now()
	accessClaims["type"] = "access"
	accessClaims["exp"] = time.Now().Add(time.Minute * 1).Unix()
	accessTokenString, _ := accessToken.SignedString([]byte(SIGNKEY))

	response := authentication.RefreshAccessTokenResponse{
		AccessToken: accessTokenString,
	}

	return &response, nil
}
