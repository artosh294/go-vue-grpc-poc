
FROM node:12.19.0-alpine3.12

RUN apk update
RUN apk add git


# grpc-web
RUN wget https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64 \
    && mv protoc-gen-grpc-web-1.2.1-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web \
    && chmod ug+x /usr/local/bin/protoc-gen-grpc-web


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