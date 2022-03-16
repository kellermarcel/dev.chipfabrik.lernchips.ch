class Organisation < ApplicationRecord
  belongs_to :user
  has_many :users
  belongs_to :folder

end
