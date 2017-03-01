class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: true
      t.references :event, foreign_key: true
      t.text :content
      t.integer :rating
      t.string :reviewer_name

      t.timestamps
    end
  end
end
