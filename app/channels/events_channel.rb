class EventsChannel < ApplicationCable::Channel
  def follow(data)
    stop_all_streams
    stream_from "events_on_map"
  end

  def unfollow
    stop_all_streams
  end
end