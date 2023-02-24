class ProjectsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :project_error
wrap_parameters format: []
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
        tags = Tagging.create!(tag_params.merge(project_id: project.id))  
        render json: project, status: :created
        # render json: tags, status: :created
    end

    def update 
        project = find_project
        project.update(project_params)
        render json: project, status: 200
    end

    def destroy
        project = find_project
        project.delete
        head :no_content
    end

    private 

    def find_project
        Project.find(params[:id])
    end

    def project_params
        params.permit(:title, :description, :github_link, :user_id)
    end

    def tag_params
        params.permit(:category_id)
    end

    def project_error
        render json: {errors: ["Could not create new project"]}
    end
end
