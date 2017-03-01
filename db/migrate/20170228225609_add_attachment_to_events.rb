class AddAttachmentToEvents < ActiveRecord::Migration[5.0]
  def up
    add_attachment :events, :photo
  end

  def down
    remove_attachment :events, :photo
  end
end
