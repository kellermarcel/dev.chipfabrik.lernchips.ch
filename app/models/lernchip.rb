class Lernchip < ApplicationRecord
  belongs_to :user
  belongs_to :contenttyp
  #belongs_to :folder
 # has_one :content
  has_many :courseitems
  has_many :courses, through: :courseitems
  has_one_attached :datei
end
