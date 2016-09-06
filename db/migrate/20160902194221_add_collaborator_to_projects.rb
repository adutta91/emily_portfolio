class AddCollaboratorToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :collaborator, :string
  end
end
