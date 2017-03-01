class Review < ApplicationRecord
  belongs_to :user
  belongs_to :reviewer, class_name: 'User'

  validates :user_id, presence: true
  validates :content, presence: true, length: {maximum: 600}
  validates :rating,
    presence: true,
    numericality: {
      only_integer: true,
      greater_than_or_equal_to: 1,
      less_than_or_equal_to: 5 }
  validates :reviewer_id, presence: true
end
