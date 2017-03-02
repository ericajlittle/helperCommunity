class EventRelayJob < ApplicationJob
  # def perform(message)
  #   comment =  MessagesController.render(partial: 'messages/message',
  #                                        locals: {message: message})
  #   ActionCable.server.broadcast "events_on_map",
  #                                comment: comment
  # end
end