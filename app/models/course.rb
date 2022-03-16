class Course < ApplicationRecord
  belongs_to :folder
  has_many :courseitems
  has_many :lernchips, through: :courseitems

end
