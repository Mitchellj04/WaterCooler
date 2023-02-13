class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        posts = Post.all 
        render json: posts
    end

    def show 
        post = find_post
        render json: post, status: 200
    end


    private 

    def find_post
        Post.find_by(params[:id])
    end
end
