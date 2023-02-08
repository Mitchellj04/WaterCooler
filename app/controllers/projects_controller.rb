class ProjectsController < ApplicationController

    def index 
        project = Project.all 
        render json: project, status: 200
    end

    def create 
        project = Project.create(project_params)
        render json: project, status: 200
    end

    private 

    def project_params
        params.permit(:title, :description, :github_link, :user_id)
    end
end
