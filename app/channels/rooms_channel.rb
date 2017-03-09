class RoomsChannel < ApplicationCable::Channel

  def subscribed
    stream_from "rooms_#{params['room_id']}"
    puts "I got subscribed in room #{params['room_id']}"
  end

  def receive(data)
    message = Message.create(content: data['content'], user_id: data['user_id'], room_id: data['room_id'])
    user_name = User.find(message.user_id).name
    ActionCable.server.broadcast "rooms_#{message.room_id}", {content: message.content, user_name: user_name, user_id: message.user_id, room_id: message.room_id}
  end

end