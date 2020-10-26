
FROM golang:1.14-alpine3.11

RUN apk update
RUN apk add git

RUN go get google.golang.org/protobuf/cmd/protoc-gen-go \
         google.golang.org/grpc/cmd/protoc-gen-go-grpc

ENV GLIBC_VERSION=2.32-r0
RUN apk --no-cache add wget \
    && wget -q https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub -O /etc/apk/keys/sgerrand.rsa.pub \
    && wget -q https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk -O glibc.apk \
    && apk add glibc.apk \
    && rm /etc/apk/keys/sgerrand.rsa.pub glibc.apk

ENV PROTOC_VERSION=3.13.0
RUN wget -q https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/protoc-${PROTOC_VERSION}-linux-x86_64.zip -O protoc.zip \
    && unzip protoc.zip -d /usr/local \
    && rm protoc.zip \
    && apk del wget