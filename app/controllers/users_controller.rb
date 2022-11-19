class UsersController < ApplicationController
    before_action :redirect_if_not_logged_in
    skip_before_action :redirect_if_not_logged_in, only: [:new, :create]
    
    def new
        @user = User.new
    end
    
    def show 
      user = User.find(params[:id])
      render json: user, status: :ok
  end 

  def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :ok
  end
    
      private
    
      def user_params
        params.permit(:username, :email, :password)
      end
end
