package server

import (
	"context"
	"fmt"
	"log"
	"strings"

	codes "google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	status "google.golang.org/grpc/status"

	"github.com/artosh294/go-vue-grpc-poc/protobuf/echo"
	jwt "github.com/dgrijalva/jwt-go"
)

type EchoServer struct {
	echo.UnimplementedEchoServer
}

func (s *EchoServer) Echo(ctx context.Context, in *echo.EchoRequest) (*echo.EchoResponse, error) {
	log.Printf("Received: %v", in.GetName())
	md, ok := metadata.FromIncomingContext(ctx)
	auth := md.Get("Authorization")[0]
	log.Println("ok", ok)
	log.Println("Authorization", auth)

	auth = strings.Replace(auth, "bearer ", "", 1)

	token, err := jwt.Parse(auth, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(SIGNKEY), nil
	})

	log.Println(err, token)

	if err != nil {
		return nil, status.Errorf(codes.Unauthenticated, err.Error())
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok && !token.Valid {
		return nil, status.Errorf(codes.Unauthenticated, "Invalid token")
	}

	fmt.Println(claims)
	return &echo.EchoResponse{Message: "Message: " + in.GetName()}, nil
}
