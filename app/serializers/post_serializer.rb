class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :link, :image, :user_id
end
