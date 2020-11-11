#


## 開発コマンド

フロントエンド起動
```
$ cd frontend
$ npm run serve
```

バックエンド起動
```
$ cd docker/server
$ docker-compose up -d
```

ブラウザでアクセス
```
http://localhost:8080
```


grpcのビルド  

Go言語
```
$ cd docker/protobuf
$ docker-compose run build-go
```

TypeScript
```
$ cd docker/protobuf
$ docker-compose run build-ts
```