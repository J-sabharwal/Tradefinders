class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :user_id
      t.string :company_id
      t.string :cleanliness
      t.string :reliability
      t.string :value
      t.string :workmanship
      t.string :comment

      t.timestamps
    end
  end
end
