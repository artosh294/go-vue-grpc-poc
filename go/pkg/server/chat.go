package server

import (
	"context"
	"fmt"
	"io"
	"time"

	"github.com/artosh294/go-vue-grpc-poc/protobuf/chat"
)

type ChatServer struct {
	chat.UnimplementedChatServer
}

func (s *ChatServer) Chat(stream chat.Chat_ChatServer) error {

	fmt.Println("Chat::connected!!")
	for {
		in, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

		message := in.GetMessage()
		fmt.Println("Chat::ReceiveMessage", message)

		reply := "received message: " + message
		stream.Send(&chat.ChatReply{
			Message: reply,
		})

		time.Sleep(time.Second * 1)
	}
}

type ChatRoom struct {
	Id               string
	SpectatorStreams []chat.Chat_SpectatorServer
}

func (room *ChatRoom) SendMessage(message string) {
	for _, stream := range room.SpectatorStreams {
		err := stream.Send(&chat.ChatReply{
			Message: message,
		})
		if err != nil {
			fmt.Println(err)
		}
	}
}

func (room *ChatRoom) AddStream(stream chat.Chat_SpectatorServer) {
	room.SpectatorStreams = append(room.SpectatorStreams, stream)
	fmt.Println("ChatRoom:AddStream", stream)
}

func (room *ChatRoom) RemoveStream(stream chat.Chat_SpectatorServer) {
	for i := range room.SpectatorStreams {
		if room.SpectatorStreams[i] == stream {
			room.SpectatorStreams = append(room.SpectatorStreams[:i], room.SpectatorStreams[i+1:]...)
			fmt.Println("ChatRoom:RemoveStream", stream)
			break
		}
	}
}

var chatrooms map[string]*ChatRoom = make(map[string]*ChatRoom)

func (s *ChatServer) Spectator(in *chat.SpectatorRequest, stream chat.Chat_SpectatorServer) error {

	fmt.Println("Spectator::connected!")

	roomId := in.GetRoom()
	room, exists := chatrooms[roomId]
	// 存在しない場合は作成する
	if exists == false {
		room = &ChatRoom{
			Id: roomId,
		}
		chatrooms[roomId] = room
	}

	// roomにstremを追加する
	room.AddStream(stream)
	stream.Send(&chat.ChatReply{
		Message: "Connected",
	})

	fmt.Println(stream.Context())

	select {
	// コネクションがキャンセルまたは切れるまで待機する
	case <-stream.Context().Done():
		fmt.Println("Done", stream.Context().Err())
		// if stream.Context().Err() != nil {
		// 	break
		// }
	}

	// streamを削除する
	room.RemoveStream(stream)

	fmt.Println("Spectator::closed")

	return nil
}

func (s *ChatServer) Speak(ctx context.Context, in *chat.ChatRequest) (*chat.SpeakResponse, error) {
	fmt.Println("Speak!!")
	roomId := in.GetRoom()
	room, exists := chatrooms[roomId]
	if exists {
		room.SendMessage(in.GetMessage())
		fmt.Println(room.Id, in.GetMessage())

	}
	return &chat.SpeakResponse{}, nil
}
