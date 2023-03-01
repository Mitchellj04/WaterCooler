class TagsController < ApplicationController

   
    
    
        private 
    
        def join_params
            params.permit(:category_id, :project_id)
        end
    end