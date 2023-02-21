Rails.application.routes.draw do
  resources :comments
  resources :posts , only: [:index, :create, :show, :destroy, :update]
  # resources :collaborations
  resources :categories, only: [:index, :create, :show]
  resources :projects, only: [:index, :create, :show, :destroy, :update]
  resources :users, only: [:create, :update]

  post '/join', to: 'taggings#create'
  get "/user", to: "users#profile"
  get "/categories_filter/:type", to: "categories#select"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
