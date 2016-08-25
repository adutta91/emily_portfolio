class ProjectsController < ApplicationController

  def create
    @project = Project.create(project_params)
  end

  def show
  end

  def index
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :start_date, :end_date, :location)
  end

  def find_project
    Project.find_by_id(params[:id])
  end

end
