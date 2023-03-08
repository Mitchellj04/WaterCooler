class UsersController < ApplicationController
  
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :user_error

    def index 
        users = User.all
        render json: users 
    end

    def profile
      current_user = @current_user
      render json: current_user
    end

    def select 
        username = params[:username]
        user = User.find_by(username: username)
        render json: user
    end
    # def select 
    #     username = params[:username]
    #     user = User.all
    #     selected = user.select { |u| u.username == username}
    #     if selected.length > 0 
    #     render json: selected
    #     else 
    #     render json: {errors: "Could not find any profiles for #{username}"}
    #     end
    # end

    # def show 
    #     user = find_user
    #     render json: user
    # end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update 
        user = @current_user
        user.update(user_params)
        render json: user, status: 200
    end


    private 

    def user_error
        render json: {errors: "Could not create new user."}, status: 422
    end

    def find_user 
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :age, :name, :password, :bio, :experience)
    end
end
