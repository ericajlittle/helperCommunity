class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :image
      t.text :description
      t.date :DoB
      t.integer :phone_number

      t.timestamps null: false
    end
  end
end