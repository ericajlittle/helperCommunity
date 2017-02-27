class EventsController < ApplicationController

  def index
    @events = Event.all

    respond_to do |format|
      format.html
      format.json { render :json => @events }
    end

  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.create(event_params)
    @event.user_id = current_user.id if current_user

    if @event.save
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