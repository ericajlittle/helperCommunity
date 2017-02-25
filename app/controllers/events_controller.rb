class EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    # puts request.params["name"]
    # puts request.params["desc"]
    puts event_params

    @event = Event.create(event_params)
    @event.user_id = current_user.id if current_user
    # puts @event.attributes
    puts "ROHIT DHAND"
    puts @event.inspect
    if @event.save
      # respond_with event_path(@event)
      render json:@event
    else
      render :new
    end
  end


  private
    def event_params
      params.require(:event).permit(
        :title,
        :description
        # :scheduled_at
        # :location,
      )
    end

end
