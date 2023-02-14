class CategorySerializer < ActiveModel::Serializer
  attributes :id, :code
  has_many :projects 
  has_many :posts
end
