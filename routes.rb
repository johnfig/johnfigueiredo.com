require 'sinatra'
require 'json'

hash = { name: "John Figueiredo",
         email: "john@johnfigueiredo.com",
         phone: "415.852.8871",
         github: "http://github.com/johnfig",
         portfolio: "www.johnfigueiredo.com",
         twitter: "@FigueiredoJohn",
         linkedin: "http://www.linkedin.com/pub/john-figueiredo/11/17/a45" 
       }

set :email_username, ENV['SENDGRID_USERNAME'] || 'john@johnfigueiredo.com'
set :email_password, ENV['SENDGRID_PASSWORD'] || 'jfig3333'
set :email_address, 'john@johnfigueiredo.com'
set :email_service, ENV['EMAIL_SERVICE'] || 'gmail.com'
set :email_domain, ENV['SENDGRID_DOMAIN'] || 'localhost.localdomain'

get '/' do 
  File.read(File.join('public', 'index.html'))
end

get '/epic_scroll' do 
  File.read(File.join('public', 'epic_scroll.html'))
end

get '/info' do
  content_type :json
  hash.to_json
end

post '/contact' do
  if params[:email] 
    require 'pony'
     Pony.mail(
      :from => params[:name] + "<" + params[:email] + ">",
      :to => settings.email_address,
      :subject => params[:name] + " has contacted you",
      :body => params[:message],
      :port => '587',
      :via => :smtp,
      :via_options => { 
        :address              => 'smtp.' + settings.email_service, 
        :port                 => '587', 
        :enable_starttls_auto => true, 
        :user_name            => settings.email_username, 
        :password             => settings.email_password, 
        :authentication       => :plain, 
        :domain               => settings.email_domain
      })
    redirect '/' 
  else
    redirect '/'
  end
end