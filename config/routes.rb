Rails.application.routes.draw do
  
  resources :reviews
  resources :users
  resources :books
  get "/", to: 'books#index'
  get "/me", to: "users#show"
  get '/signup', to: 'users#new'
  # get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout', to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
