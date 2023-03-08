class ProjectsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :project_error
wrap_parameters format: []
skip_before_action :authorize, only: [:index, :create]

    def index 
        project = Project.all 
        render json: project
    end

    def show 
        project = find_project
        render json: project
    end

    def create 
        # debugger
        # project_params = params[:project]
        tag_params = params[:tag]
        @project = Project.create!(project_params) 
        category = Category.select { |cat| tag_params.include?(cat.id)}
        tags = tag_params.map {|num| {category_id: num, project_id: @project.id}}
        tags.each { |tag| Tagging.new(tag)}
        @project.categories << category
        render json: @project, status: :created
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

    def addCollab 
        @project = find_project
        collab = Collaboration.create!(collab_params)
        @project.collaborations << collab
        render json: @project, status: 200
    end

    def collabAcceptance
        collab = find_collab
        collab.update(collab_params)
        @project = find_project
        render json: @project 
    end

    
    private 

    def find_project
        Project.find(params[:id])
    end

    def project_params
        params.require(:project).permit(:title, :description, :github_link, :user_id)
    end

    def project_error
        render json: {errors: ["Could not create new project"]}
    end

    def collab_params
        params.require(:collab).permit(:user_id, :project_id, :collaborate, :acceptance)
    end

    def find_collab
        Collaboration.find(params[:collab_id])
    end

end
