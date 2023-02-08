class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :age, :password_digest, :experience, :bio
end
