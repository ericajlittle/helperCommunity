class AddTimeToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :scheduled_at, :datetime
  end
end
