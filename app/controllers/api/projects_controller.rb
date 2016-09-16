class Api::ProjectsController < ApplicationController

  def create
    @project = Project.create(project_params)
    render :show
  end

  def show
    @project = find_project
  end

  def index
    @projects = Project.all
  end

  def update
    @project = find_project
    if @project.update(project_params)
      render :show
    else
      render :errors, status: 422
    end
  end

  def destroy
    @project = find_project
    if @project
      @project.destroy
      render :show
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :location, :start_date,
                                    :end_date, :lat, :lng, :collaborator, :id)
  end

  def find_project
    Project.find_by_id(params[:id])
  end

end
