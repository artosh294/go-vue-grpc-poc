package server

import (
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc/metadata"

	"github.com/artosh294/go-vue-grpc-poc/protobuf/echo"
	jwt "github.com/dgrijalva/jwt-go"
)

type EchoServer struct {
	echo.UnimplementedEchoServer
}

func (s *EchoServer) Echo(ctx context.Context, in *echo.EchoRequest) (*echo.EchoResponse, error) {
	log.Printf("Received: %v", in.GetName())
	md, ok := metadata.FromIncomingContext(ctx)
	auth := md.Get("Authorization")
	log.Println("ok", ok)
	log.Println("Authorization", auth)

	token, err := jwt.Parse(auth[0], func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		log.Println("aaa")
		return []byte(SIGNKEY), nil
	})

	log.Println(err)

	if err != nil {
		panic(err)
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok && !token.Valid {
		return nil, nil
	}

	fmt.Println(claims)
	return &echo.EchoResponse{Message: "Message: " + in.GetName()}, nil
}
