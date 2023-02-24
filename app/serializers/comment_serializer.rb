class CommentSerializer < ActiveModel::Serializer
  attributes :id, :answer, :image, :user_id, :user, :post_id
  belongs_to :user
  belongs_to :post
  
end
