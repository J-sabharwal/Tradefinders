class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :review_id
      t.string :photo_url

      t.timestamps
    end
  end
end
