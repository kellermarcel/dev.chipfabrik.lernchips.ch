Rails.application.routes.draw do
  
  get 'play/index'
  get 'play/edit'
  resources :inboxes
  resources :courses
  resources :ofolders
  resources :ufolders
  resources :folders
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
devise_for :users, controllers: {
  sessions: 'users/sessions',
  registrations: 'users/registrations'
}

devise_scope :user do
  get '/users/new' => "users/new", :as => :new  
  post '/signup' => "users/registrations#new"
  get '/users/sign_out' => 'devise/sessions#destroy'
end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get '/terms', to: 'home#terms'
  get "welcome/index"
  get "lernchips/htmx"
  post "lernchips/answer"
  get "/user-cond", to: 'welcome#user-cond'
  get "/privacy-policy", to: 'welcome#privacy-policy'
  get "/reg-page", to: 'welcome#reg-page'
  get "/reg-company", to: 'welcome#reg-company'
  post "/individual-step", to: "welcome#individual-step"
  get "/individual-plans", to: "welcome#individual-plans"
  get "/lernchips", to: "lernchips#index"
  get "/lernchips/new", to: "lernchips#new"
  get "/test-editor", to: "welcome#test-editor"
  get "/set-preview", to: "courses#setpreview"
  get "/test-preview", to: "lernchips#testpreview"
  get "/prices-page", to: "welcome#prices-page"
  get "/contact-page", to: "welcome#contact-page"
  get "/modalfolder", to: "folders#modal"
  post "/modalfolder", to: "folders#create"
    get "/modalchipset", to: "courses#modalchipset"
    get "/modallernchipnew", to: "lernchips#modallernchipnew"
    get "/modallernchipedit", to: "lernchips#modallernchipedit"

  get "/newlernchip", to: "lernchips#newlernchip"
  get "/lernchiplink", to: "lernchips#lernchiplink"
  get "/chipsetlink", to: "courses#chipsetlink"
  get "/viewlink", to: "courses#viewlink"
  post "/modalchipset", to: "courses#create"
  post "/foldercreate", to: "folders#create"
  post "/deletecourse", to: "courses#deletecourse"
  post "/deletelernchip", to: "lernchips#deletelernchip"
  get "/contentchipset", to: "courses#contentchipset"
  get "/deletefolder", to: "folders#destroy"
  #post "/createchipset", to: "courses#create"


  #post "/createchipset", to: "lernchips#createchipset"
  post "/lcshow", to: "courses#lcshow"
  get "/pdfshow", to: "lernchips#pdfshow"


  resources :lernchips
  get "/foldernew", to: "lernchips#foldernew"
  get "/art", to: "lernchips#art"
  get "/lcnew", to: "lernchips#new"
 
  post "lernchips/movetofolder"
  post "lernchips/lernchiptochipset"
  post "lernchips/showfoldercontent"
  post "lernchips/showmore"
  post "lernchips/chipsettitle"
  post "courses/contentchipset"
  post "courses/chipsetorder"
  get "courses/chipsettiteledit"
  post "lti/launch"






  post "/movetofolder", to: "lernchips#movetofolder"


  root to: "welcome#index"

end