class User < ApplicationRecord
  has_many :reviews
  has_many :photos
  has_many :companies, through: :reviews
end
