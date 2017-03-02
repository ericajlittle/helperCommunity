module EventsHelper

  def RoomIdArray rooms
    room_id = []
    rooms.each do |r|
      room_id.push(r.id)
    end
    room_id
  end

end
