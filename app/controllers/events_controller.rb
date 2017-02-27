class EventsController < ApplicationController

  def index
    @events = Event.all

    respond_to do |format|
      format.html
      format.json { render :json => @events }
    end
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to '/'
    else
      render  :new
    end
  end

  private

  def event_params
    puts params
    params
    # params.require(:event).permit(
    #   :title,
    #   :address,
    #   :description
    # )
  end

end