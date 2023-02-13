class CategoriesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index 
        category = Category.all
        render json: category, status: 200
    end

    def show
        category = category_find
        render json: category, status: 200
    end

    def create 
        category = Category.create(category_params)
        render json: category, status: :created
    end

    def select 
        type = params[:type]
        category = Category.all
        selected = category.select { |c| c.code == type}
        if selected.length > 0 
        render json: selected
        else 
        render json: {errors: "Could not find any projects for #{type}"}
        end
    end

    private 

    def category_params
        params.permit(:code)
    end

    def category_find
        Category.find(params[:id])
    end
end
