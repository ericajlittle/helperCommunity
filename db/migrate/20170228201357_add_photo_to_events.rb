class AddPhotoToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :photo, :attachment
  end
end
