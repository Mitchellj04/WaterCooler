class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.integer :age
      t.string :password_digest
      t.string :experience
      t.string :bio
      t.string :email 
      t.string :github 

      t.timestamps
    end
  end
end
