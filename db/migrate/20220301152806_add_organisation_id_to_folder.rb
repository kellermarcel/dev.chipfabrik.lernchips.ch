class AddOrganisationIdToFolder < ActiveRecord::Migration[6.1]
  def change
    add_column :folders, :organisation_id, :integer, :default => 0
  end
end
