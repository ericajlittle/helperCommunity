class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.float :startlat
      t.float :startlng
      t.float :endlat
      t.float :endlng
      t.references :user, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
