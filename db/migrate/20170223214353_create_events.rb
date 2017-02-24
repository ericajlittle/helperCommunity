class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.float :lat
      t.float :lng
      t.text :description
      t.boolean :status
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
