class CollaborationSerializer < ActiveModel::Serializer
  attributes :user, :collaborate, :acceptance
  belongs_to :project
  belongs_to :user
end
