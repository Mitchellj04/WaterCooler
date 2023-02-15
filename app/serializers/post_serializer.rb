class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :image
  belongs_to :user
  has_many :categories
  has_many :comments
end
