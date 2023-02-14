class CreateTags < ActiveRecord::Migration[7.0]
  def change
    create_table :tags do |t|
      t.integer :post_id
      t.integer :category_id

      t.timestamps
    end
  end
end
