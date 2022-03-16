class CreateInboxes < ActiveRecord::Migration[6.1]
  def change
    create_table :inboxes do |t|
      t.string :name

      t.timestamps
    end
  end
end
