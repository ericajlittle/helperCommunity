module ApplicationCable
  class Channel < ActionCable::Channel::Base
  end
  # app/channels/chat_channel.rb
  class ChatChannel < ApplicationCable::Channel
  end

  # app/channels/appearance_channel.rb
  class AppearanceChannel < ApplicationCable::Channel
  end
end
