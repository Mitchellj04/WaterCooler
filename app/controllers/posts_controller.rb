class PostsController < ApplicationController
    # rescue_from ActiveRecord::RecordInvalid, with: :post_error
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
        tag_params = params[:tag]
        @post = Post.create!(post_params) 
        category = Category.select { |cat| tag_params.include?(cat.id)}
        tags = tag_params.map {|num| {category_id: num, post_id: @post.id}}
        tags.each { |tag| Tag.new(tag)}
        @post.categories << category
        render json: @post, status: :created
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}
    end

    def update 
        post = find_post
        post.update(post_params)
        render json: post, status: 200
    end
    
    def updateComment 
        post = find_post
        comment = Comment.create!(comment_params)
        find_post.comments << comment 
        render json: find_post
    end


    def destroy
        post = find_post
        post.delete
        head :no_content
    end

    def commentDelete
        comment = find_comment
        comment.delete 
        post_id = comment.post_id
        post = Post.find(post_id)
        render json: post
    end


    private 

    def find_post
        Post.find(params[:id])
    end

    def find_comment
        Comment.find(params[:id])
    end

    def post_error
        render json: {errors: ["Could not create new post"]}
    end

    def post_params
        params.require(:post).permit(:title, :description, :link, :image, :user_id)
    end

    def comment_params
        params.require(:comment).permit(:answer, :user_id, :post_id)
    end

end
