class ProjectsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :project_error
skip_before_action :authorize, only: :index

    def index 
        project = Project.all 
        render json: project
    end

    def show 
        project = find_project
        render json: project
    end

    def create 
        project = Project.create!(project_params)
        render json: project, status: 200
    end

    private 

    def find_project
        Project.find(params[:id])
    end

    def project_params
        params.permit(:title, :description, :github_link, :user_id)
    end

    def project_error
        render json: {errors: "Could not create new project"}
    end
end
