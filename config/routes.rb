Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products
      resources :users, only: [:index, :update]
      resources :orders, only: [:index, :update]
    end
  end
end
