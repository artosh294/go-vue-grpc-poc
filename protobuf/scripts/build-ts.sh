#!/bin/bash

cd `dirname $0`
cd ../

TS_DIST_BASEPATH=dist/ts/
TS_VUE_DIST_BASEPATH=../frontend/src/

protos=`find protobuf -name *.proto`

for proto in $protos; do

    dir=`dirname $proto`
    file=`basename $proto`

    # ts
    echo "compile typescript $proto"
    mkdir -p $TS_DIST_BASEPATH$dir
    protoc -I $dir $file --js_out=import_style=commonjs,binary:$TS_DIST_BASEPATH$dir --grpc-web_out=import_style=typescript,mode=grpcwebtext:$TS_DIST_BASEPATH$dir

done

# frontendフォルダへコピー
echo "copy compiled typescript to frontend"
cp -r $TS_DIST_BASEPATH* $TS_VUE_DIST_BASEPATH