class RemoveLocationAddLatLong < ActiveRecord::Migration
  def change

    remove_column :projects, :location, :string

    add_column :projects, :lat, :string
    add_column :projects, :lng, :string

  end
end
