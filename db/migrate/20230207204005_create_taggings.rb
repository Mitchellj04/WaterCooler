class CreateTaggings < ActiveRecord::Migration[7.0]
  def change
    create_table :taggings do |t|
      t.integer :project_id
      t.integer :category_id

      t.timestamps
    end
  end
end
