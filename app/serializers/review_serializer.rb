class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :review_body
  has_one :book
  has_one :user
end
