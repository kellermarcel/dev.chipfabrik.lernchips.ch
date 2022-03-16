class AddUseridToOrganisation < ActiveRecord::Migration[6.1]
  def change
    add_column :organisations, :user_id, :integer
  end
end
