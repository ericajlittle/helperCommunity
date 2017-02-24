class User < ApplicationRecord

  has_secure_password
  has_many :locations
  has_many :helper_lists
  has_many :events


end
