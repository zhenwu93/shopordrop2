class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :size, :price, :image_url

  has_many :users
end
