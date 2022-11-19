class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title, unique: true
      t.string :author
      t.string :description
      t.integer :page_count
      t.string :img_url, unique: true

      t.timestamps
    end
  end
end
