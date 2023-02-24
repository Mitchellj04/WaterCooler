class CommentsController < ApplicationController
    skip_before_action :authorize, only: :index

    def create 
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def index 
        comment = Comment.all
        render json: comment
    end

    private 

    def comment_params
        params.permit(:answer, :user_id, :post_id)
    end
end
