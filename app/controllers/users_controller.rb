class UsersController < ApplicationController
  
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :user_error

  
    def profile
      current_user = @current_user
      render json: current_user
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end


    private 

    def user_error
        render json: {errors: "Could not create new user."}, status: 422
    end

    def find_user 
        User.find(params[:id])
    end

    def user_params
        params.permit(:username, :age, :name, :password)
    end
end
