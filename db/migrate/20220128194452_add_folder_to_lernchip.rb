class AddFolderToLernchip < ActiveRecord::Migration[6.1]
  def change
    add_column :lernchips, :folder_id, :integer, :default => 0
  end
end
