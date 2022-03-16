class AddFolderIdToOrganisation < ActiveRecord::Migration[6.1]
  def change
    add_column :organisations, :folder_id, :integer
  end
end
