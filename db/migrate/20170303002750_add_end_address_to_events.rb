class AddEndAddressToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :end_address, :string
  end
end
