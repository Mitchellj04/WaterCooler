Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :destroy]
  resources :posts , only: [:index, :create, :show, :destroy, :update]
  resources :collaborations, only: [:create]
  resources :categories, only: [:index, :create, :show]
  resources :projects, only: [:index, :create, :show, :destroy, :update]
  resources :users, only: [:create, :update, :show, :index]

  post '/join', to: 'taggings#create'
  get "/user", to: "users#profile"
  get "/users_filter/:username", to: 'users#select'
  get "/categories_filter/:type", to: "categories#select"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
