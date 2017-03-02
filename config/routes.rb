Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'events#index'

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  resources :events, only: [:index, :new, :show, :create]

  resources :sessions

  resources :users do
    resources :reviews, only: [:create, :destroy]
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

end
