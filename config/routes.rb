Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :show, :update]
      resources :users, only: [:index, :update]
      resources :orders, only: [:index, :update]
    end
  end
end
