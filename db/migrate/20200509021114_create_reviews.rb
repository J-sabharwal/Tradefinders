class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :company, index: true, foreign_key: true
      t.integer :cleanliness
      t.integer :reliability
      t.integer :value
      t.integer :workmanship
      t.string :comment

      t.timestamps null: false
    end
  end
end
