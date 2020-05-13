class Photo < ApplicationRecord
  belongs_to :review, optional: true
  belongs_to :company, optional: true
end
