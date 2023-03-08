class CollaborationSerializer < ActiveModel::Serializer
  attributes :id, :user, :collaborate, :acceptance
  belongs_to :project
  belongs_to :user
end
