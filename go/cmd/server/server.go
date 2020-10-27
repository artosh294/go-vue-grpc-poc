/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// Package main implements a server for Greeter service.
package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc/metadata"

	"github.com/artosh294/go-vue-grpc-poc/go/pkg/server"
	"github.com/artosh294/go-vue-grpc-poc/protobuf/echo"
	pb "github.com/artosh294/go-vue-grpc-poc/protobuf/helloworld"
	"github.com/artosh294/go-vue-grpc-poc/protobuf/protobuf/authentication"
	"google.golang.org/grpc"
)

const (
	port = ":50051"
)

// server is used to implement helloworld.GreeterServer.
type greeterServer struct {
	pb.UnimplementedGreeterServer
}

// SayHello implements helloworld.GreeterServer
func (s *greeterServer) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.GetName())
	return &pb.HelloReply{Message: "Hello " + in.GetName()}, nil
}

func (s *greeterServer) SayHelloAgain(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.GetName())
	log.Printf("")
	return &pb.HelloReply{Message: "Hello Again " + in.GetName()}, nil
}

type echoServer struct {
	echo.UnimplementedEchoServer
}

func (s *echoServer) Echo(ctx context.Context, in *echo.EchoRequest) (*echo.EchoResponse, error) {
	log.Printf("Received: %v", in.GetName())
	md, ok := metadata.FromIncomingContext(ctx)
	auth := md.Get("Authorization")
	log.Println("ok", ok)
	log.Println("Authorization", auth)
	return &echo.EchoResponse{Message: "Message: " + in.GetName()}, nil
}

func main() {
	fmt.Println("launch GRPC Server!!!")
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &greeterServer{})
	echo.RegisterEchoServer(s, &echoServer{})
	authentication.RegisterAuthenticationServer(s, &server.AuthenticationServer{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
