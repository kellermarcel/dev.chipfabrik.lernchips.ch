class Folder < ApplicationRecord
  has_many :courses
  has_many :lernchips
  has_many :organisations
end
