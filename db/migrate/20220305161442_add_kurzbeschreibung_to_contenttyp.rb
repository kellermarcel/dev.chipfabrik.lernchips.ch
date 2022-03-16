class AddKurzbeschreibungToContenttyp < ActiveRecord::Migration[6.1]
  def change
    add_column :contenttyps, :kurzbeschreibung, :text
  end
end
