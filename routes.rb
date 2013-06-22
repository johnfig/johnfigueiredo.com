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

get '/' do 
  File.read(File.join('public', 'index.html'))
end

get '/info' do
  content_type :json
  hash.to_json
end