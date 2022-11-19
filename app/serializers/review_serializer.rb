class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :review_body
  has_one :book
  has_one :user
end
