class Company < ApplicationRecord
  has_many :reviews
  has_many :photos
  has_many :users, through: :reviews
end
