 
 ```
 protoc -I ../../go/protobuf/echo echo.proto --js_out=import_style=typescript:src/protobuf/echo --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/protobuf/echo
 ```


 ```
 protoc -I ../../go/protobuf/echo echo.proto --js_out=import_style=commonjs,binary:src/protobuf/echo --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/protobuf/echo
 ```