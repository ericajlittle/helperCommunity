module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def connected
      puts 'connected'
    end
  end
end
