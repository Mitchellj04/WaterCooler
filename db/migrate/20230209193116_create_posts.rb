class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.string :link
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
