class AddContenttypIdToLernchip < ActiveRecord::Migration[6.1]
  def change
    add_column :lernchips, :contenttyp_id, :integer
  end
end
