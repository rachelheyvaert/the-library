class ReviewsController < ApplicationController
    # before_action only: [:show]

 def index
    reviews = Review.all
    render json: reviews
  end

    def show
        review = Review.find(params[:id])
        render json: review, include: [:book, :user], status: :ok
    end 

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end 

    def update 
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end 

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content 
    end 

    private
    
    def review_params
        params.permit(:rating, :review_body, :book_id, :user_id)
    end
end
