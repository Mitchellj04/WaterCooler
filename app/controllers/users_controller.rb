class UsersController < ApplicationController

    def show 
        user = find_user
        render json: user, status: 200
    end


    private 

    def find_user 
        User.find(params[:id])
    end
end
