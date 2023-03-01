class CollaborationsController < ApplicationController

    def create 
        collab = Collaboration.create!(collab_params)
        render json: collab, status: :created
    end

    private 

    def collab_params
        params.permit(:user_id, :project_id, :collaborate)
    end
end
