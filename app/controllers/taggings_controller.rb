class TaggingsController < ApplicationController

def create 
    join = Tagging.create!(join_params)
    render json: join, status: :created
end


    private 

    def join_params
        params.permit(:category_id, :project_id)
    end
end