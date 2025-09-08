class CreateUnits < ActiveRecord::Migration[8.0]
  def change
    create_table :units do |t|
      t.string :name, null: false
      t.integer :bedroom_count, null: false
      t.integer :bathroom_count, null: false
      t.integer :unit_size
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end

    add_index :units, [:property_id, :name], unique: true
  end
end
