class ChangeTypeForDates < ActiveRecord::Migration
  def change
    change_column :projects, :start_date, :string
    change_column :projects, :end_date, :string
  end
end
