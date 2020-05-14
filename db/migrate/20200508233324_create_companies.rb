class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :email
      t.string :description
      t.string :phone_number
      t.string :trade_type
      t.string :location
      t.string :company_photo
 
      t.timestamps null: false
    end
  end
end
