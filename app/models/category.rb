class Category < ApplicationRecord
    has_many :taggings
    has_many :projects, through: :taggings
    has_many :tags 
    has_many :posts, through: :tags
end
