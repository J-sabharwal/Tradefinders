class Photo < ApplicationRecord
  belongs_to :review, optional: true
  belongs_to :company, optional: true
  belongs_to :user, optional: true
end
