Rails.application.routes.draw do
  # resources :collaborations
  resources :categories, only: [:index, :create]
  resources :projects, only: [:index]
  resources :users, only: [:create, :update, :show]

  get "/categories/:type", to: "categories#select"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
