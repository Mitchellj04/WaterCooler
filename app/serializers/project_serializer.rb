class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :github_link
  has_many :categories
  has_many :collaborations
  belongs_to :user
end
