class Project < ApplicationRecord
    has_many :taggings
    has_many :categories, through: :taggings
    belongs_to :user
end
