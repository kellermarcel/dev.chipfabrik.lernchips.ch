class AddFolderToCourse < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :folder_id, :integer, :default =>0
  end
end
