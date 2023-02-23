class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :post_error
    skip_before_action :authorize, only: :index

    def index
        posts = Post.all 
        render json: posts
    end

    def show 
        post = find_post
        render json: post, status: 200
    end

    def create 
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update 
        post = find_post
        post.update(post_params)
        render json: post, status: 200
    end

    def destroy
        post = find_post
        post.delete
        head :no_content
    end


    private 

    def find_post
        Post.find(params[:id])
    end

    def post_error
        render json: {errors: ["Could not create new post"]}
    end

    def post_params
        params.permit(:title, :description, :link, :image, :user_id)
    end
end
