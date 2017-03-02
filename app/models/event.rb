class Event < ApplicationRecord

  belongs_to :user

  validates :title, presence: true

  validates :description, presence: true
  # validates :user_id, presence: true
  # validates :scheduled_at, presence: true
  # validates :location, presence: true

  geocoded_by :address, :latitude  => :lat, :longitude => :lng

  after_validation :geocode

  after_create_commit { ActionCable.server.broadcast 'events', {message: self.to_json}}

end
