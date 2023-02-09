Rails.application.routes.draw do
  resources :comments
  resources :posts
  # resources :collaborations
  resources :categories, only: [:index, :create]
  resources :projects, only: [:index, :create, :show]
  resources :users, only: [:create, :update, :show]

  get "/categories/:type", to: "categories#select"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
