class Api::V1::ProductsController < ApplicationController
  before_action :find_product, only: [:show, :update, :destroy]

  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @product
  end

  # def create
  #   @product = Product.create(product_params)
  #   render json: @product status: :created
  # end

  def update
    @product.update(product_params)
    if @product.save
      # break here, check serializer
      render json: @product, status: :accepted
    else
      render json: {errors: @product.errors.full_messages }
    end
  end

  def destroy
    @product.destroy
  end

  private

  def product_params
    params.permit(:name, :price, :description, :size, :image_url)
  end

  def find_product
    @product = Product.find(params[:id])
  end

end
