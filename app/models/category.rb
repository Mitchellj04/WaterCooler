class Category < ApplicationRecord
    has_many :taggings
    has_many :projects, through: :taggings
end
