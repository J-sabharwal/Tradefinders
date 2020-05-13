class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.belongs_to :review, index: true, foreign_key: true
      t.belongs_to :company, index: true, foreign_key: true
      t.belongs_to :user, index: true, foreign_key: true
      t.string :photo_url

      t.timestamps null: false
    end
  end
end
