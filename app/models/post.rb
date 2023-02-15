class Post < ApplicationRecord
    has_many :tags 
    has_many :categories, through: :tags
    belongs_to :user
    has_many :comments
    validates :title, presence: true 
    validates :description, presence: true 
    validates :user_id, presence: true
end
