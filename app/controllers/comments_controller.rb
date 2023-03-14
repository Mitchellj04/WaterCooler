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

    def destroy
        comment = find_comment
        comment.delete
        head :no_content
    end

    private 

    def comment_params
        params.permit(:answer, :user_id, :post_id)
    end

    def find_comment
        Comment.find(params[:id])
    end

    def find_post
        Post.find(params[:post_id])
    end
end
