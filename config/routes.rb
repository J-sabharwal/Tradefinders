Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'
    # get '/users', to: 'user#index'
    
    # This is like "rails magic" way of generating routs
    resources :user
    resources :company
    resources :review
    resources :photo

    

    # This is manually hooking the routes.
    # The ":" on the HTML indicated that everything after this is treated as Parameters
    # With a similar way, you should be able to do queries with text strings, and show the companies you want.
    # get '/reviews/given_company/:company_id', to: 'review#given_company'
    # get '/reviews_for_company_1', to: 'review#reviews_for_company_1'
    # get '/reviewlel', to: 'review#bad_path_name'
    
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
