class Content < ApplicationRecord
	self.table_name = 'content' # da in der externen H5P Javascript die Tabelle content heisst ....
	belongs_to :lernchip
	#belongs_to :content_type
end