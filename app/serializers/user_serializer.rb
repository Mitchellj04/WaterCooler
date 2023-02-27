class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :age, :password_digest, :experience, :bio
  has_many :projects
  has_many :posts
  has_many :comments
  # has_many :collaborations
end
