class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :github_link
  has_many :categories
  belongs_to :user
end
