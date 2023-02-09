class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :user_error

    def show 
        user = @current_user
        render json: user, status: 200
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user
    end


    private 

    def user_error
        render json: {errors: "Could not create new user."}
    end

    def find_user 
        User.find(params[:id])
    end
end
