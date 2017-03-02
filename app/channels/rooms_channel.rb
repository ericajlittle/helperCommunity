class RoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "rooms_#{params['room_id']}"
    puts "I got subscribed in room #{params['room_id']}"
  end
end