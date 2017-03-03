class RoomsChannel < ApplicationCable::Channel

  def subscribed
    stream_from "rooms_#{params['room_id']}"
    puts "I got subscribed in room #{params['room_id']}"
  end

  def receive(data)
    message = Message.create(content: data['content'], user_id: data['user_id'], room_id: data['room_id'])
  end

end