#!/bin/bash

cd `dirname $0`
cd ../

GO_DIST_BASEPATH=dist/go/

protos=`find protobuf -name *.proto`

for proto in $protos; do

    dir=`dirname $proto`
    file=`basename $proto`

    # golang
    echo "compile golang $proto"
    mkdir -p $GO_DIST_BASEPATH$dir
    protoc -I $dir $file --go_out=$GO_DIST_BASEPATH$dir --go_opt=paths=source_relative --go-grpc_out=$GO_DIST_BASEPATH$dir --go-grpc_opt=paths=source_relative

done