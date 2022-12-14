class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, unique: true
      t.string :password_digest
      t.string :email, unique: true

      t.timestamps
    end
  end
end
