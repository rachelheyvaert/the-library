class BooksController < ApplicationController
    def index 
        render json: Book.all, status: :ok
    end

    def show
        book = Book.find(params[:id])
        render json: book, include: :reviews, status: :ok
    end 
    def create 
        book = Book.create!(book_params)
        render json: book, status: :created
    end

    def update
        book = Book.find(params[:id])
        book.update!(book_params)
        render json: book, status: :accepted
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content
    end

    private

    def book_params
        params.permit(:title, :author, :page_count, :description, :img_url)
    end

end

end
