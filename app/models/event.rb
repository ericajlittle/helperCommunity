class Event < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  # validates :user_id, presence: true
  # validates :scheduled_at, presence: true
  # validates :location, presence: true


end
