class UpdateReviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :reviewer_name
    add_reference :reviews, :reviewer
  end
end
