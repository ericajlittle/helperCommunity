class User < ApplicationRecord

  has_secure_password
  has_many :locations
  has_many :helper_lists
  has_many :events
  has_attached_file :photo, :styles => { :medium =>  "300x300#", :thumb => "200x200#" }

end
