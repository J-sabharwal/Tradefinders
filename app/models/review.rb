class Review < ApplicationRecord
  belongs_to :user
  belongs_to :company
  has_many :photos
end
