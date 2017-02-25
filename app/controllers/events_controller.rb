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
    @event = Event.new(event_params)
    puts @event.attributes

    if @event.save
      redirect_to event_path(@event)
      # need to redirect page to new event page
    else
      render :new
    end
  end


  private
  def event_params
    ans = params.require(:event).permit(
      :title,
      :description,
      :scheduled_at
      # :location,
      # :user_id
    )
    puts ans
    ans
  end

end