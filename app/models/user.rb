class User < ApplicationRecord

  has_many :locations
  has_many :helper_lists
  has_many :events

end
