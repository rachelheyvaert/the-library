class BookSerializer < ActiveModel::Serializer
  attributes :title, :author, :description, :page_count, :img_url
  has_many :reviews
end
