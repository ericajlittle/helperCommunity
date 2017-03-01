class User < ApplicationRecord

  has_secure_password
  has_many :locations
  has_many :helper_lists
  has_many :events
  has_attached_file :photo, :styles => { :medium =>  "300x300#", :thumb => "200x200#" }
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/
  has_many :reviews
  has_and_belongs_to_many :events

  def accepted_event?(event_id)
    events.where(id: event_id).any?
  end
end
