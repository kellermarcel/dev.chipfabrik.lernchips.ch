class Contentart < ApplicationRecord
    has_many :contenttyparts
    has_many :contenttyps, through: :contenttyparts
    has_one_attached :image	
end
