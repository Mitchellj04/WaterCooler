class CategorySerializer < ActiveModel::Serializer
  attributes :id, :code
  has_many :projects 
end
