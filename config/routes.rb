Rails.application.routes.draw do
  
  resources :reviews, only: [ :index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create]
  resources :books, only: [ :index, :show, :create, :update, :destroy]
  get "/books", to: 'books#index'
  get "/me", to: "users#show"
  get '/signup', to: 'users#new'
  post '/login' => 'sessions#create'
  delete '/logout', to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
