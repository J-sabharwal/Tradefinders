Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'
    # get '/users', to: 'user#index'
    
    resources :user
    resources :company, only: [:show] do
      get '/trade', to: 'company#getCompaniesByTrade'
    end

    resources :review

    get '/reviews/given_company/:company_id', to: 'review#given_company'
    get '/reviews_for_company_1', to: 'review#reviews_for_company_1'
    get '/reviewlel', to: 'review#bad_path_name'
    
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
