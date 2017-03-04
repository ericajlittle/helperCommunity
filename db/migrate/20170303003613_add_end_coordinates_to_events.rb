class AddEndCoordinatesToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :end_lat, :float
    add_column :events, :end_lng, :float
  end
end
