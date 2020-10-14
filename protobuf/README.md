
golang
```
mkdir -p dist/go/protobuf/echo
protoc -I ./protobuf/echo echo.proto --go_out=dist/go/protobuf/echo --go_opt=paths=source_relative --go-grpc_out=dist/go/protobuf/echo --go-grpc_opt=paths=source_relative
```

typescript
```
mkdir -p dist/ts/protobuf/echo
protoc -I ./protobuf/echo echo.proto --js_out=import_style=commonjs,binary:dist/ts/protobuf/echo --grpc-web_out=import_style=typescript,mode=grpcwebtext:dist/ts/protobuf/echo

// do browserify
```