class CreateHelperLists < ActiveRecord::Migration[5.0]
  def change
    create_table :helper_lists do |t|
      t.references :event, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
