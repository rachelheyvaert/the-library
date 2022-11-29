class BooksController < ApplicationController
    before_action :find_book, only: [:show, :update, :destroy]
    skip_before_action :authenticate_user, [:create]
    before_action :is_authorized?, only: [:create]
    before_action :is_owner?, only: [:update, :destroy]
    
    def index 
        render json: Book.all, status: :ok
    end

    def show
        # book = Book.find(params[:id])
        render json: @book, include: :reviews, status: :ok
    end 
    def create 
        book = Book.create!(book_params, user_id: current_user.id)
        render json: book, status: :created
    end

    def update
        # book = Book.find(params[:id])
        @book.update!(book_params)
        render json: book, status: :accepted
    end

    def destroy
        @book.destroy
        head :no_content
    end

    private

    def book_params
        params.permit(:title, :author, :page_count, :description, :img_url)
    end

    def find_book
        @book = Book.find(params[:id])
    end

    def is_owner? 
        permitted = @book.user_id == current_user.id
        render json: {errors: {User: "does not own this"}}, status: :forbidden unless permitted
    end
end
