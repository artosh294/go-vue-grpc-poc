package server

import (
	"context"

	"github.com/artosh294/go-vue-grpc-poc/protobuf/authentication"
)

type AuthenticationServer struct {
	authentication.UnimplementedAuthenticationServer
}

func (s *AuthenticationServer) Login(ctx context.Context, in *authentication.LoginRequest) (*authentication.LoginReply, error) {
	return nil, nil
}

func (s *AuthenticationServer) RefreshAccessToken(ctx context.Context, in *authentication.RefreshAccessTokenRequest) (*authentication.RefreshAccessTokenReply, error) {
	return nil, nil
}
