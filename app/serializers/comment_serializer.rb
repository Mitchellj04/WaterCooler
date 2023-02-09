class CommentSerializer < ActiveModel::Serializer
  attributes :id, :answer, :image, :user_id, :post_id
end
