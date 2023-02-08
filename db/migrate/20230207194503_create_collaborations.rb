class CreateCollaborations < ActiveRecord::Migration[7.0]
  def change
    create_table :collaborations do |t|
      t.string :user_id 
      t.string :project_id
      t.boolean :collaborate 
      t.boolean :acceptance 
      t.timestamps
    end
  end
end
