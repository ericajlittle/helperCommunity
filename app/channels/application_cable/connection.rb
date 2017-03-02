module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connected
      puts 'connected'
    end
  end
end
