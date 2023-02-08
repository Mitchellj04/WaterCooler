class User < ApplicationRecord
    has_many :projects
    has_many :categories, through: :projects
    has_secure_password
    validates :username, :password_digest, presence: true  
end
