class UserSerializer < ActiveModel::Serializer
  attributes  :username, :password_digest, :email
  has_many :reviews
end
