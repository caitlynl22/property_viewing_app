class CreateProperties < ActiveRecord::Migration[8.0]
  def change
    create_table :properties do |t|
      t.string :name, null: false
      t.string :address1, null: false
      t.string :address2
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :year_built
      t.string :website_url

      t.timestamps
    end
  end
end
