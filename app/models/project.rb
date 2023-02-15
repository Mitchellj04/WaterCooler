class Project < ApplicationRecord
    has_many :taggings
    has_many :categories, through: :taggings
    belongs_to :user
    validates :title, presence: true 
    validates :user_id, presence: true 
    validates :description, presence: true 
end
