class User < ApplicationRecord
  has_many :reviews
  has_many :companies, through: :reviews
end
