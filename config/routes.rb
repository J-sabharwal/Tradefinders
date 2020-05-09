Rails.application.routes.draw do
  get 'photos/show'
  get 'photos/create'
  get 'reviews/show'
  get 'reviews/create'
  get 'reviews/destroy'
  get 'user/show'
  get 'user/create'
  get 'user/destroy'
  get 'companies/show'
  get 'companies/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'
    # get '/users', to: 'user#index'
    
    resources :user

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
