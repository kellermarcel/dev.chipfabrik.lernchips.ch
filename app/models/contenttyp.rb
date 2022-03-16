class Contenttyp < ApplicationRecord
	has_many :lernchips
	has_many :contenttyparts
	has_many :contentarts, through: :contenttyparts
	default_scope {order(:name)}
	has_one_attached :image
        #has_and_belongs_to_many :contentarts
end
