require './routes'

if memcache_servers = ENV["MEMCACHE_SERVERS"]
  rack_cache_opts = {
    verbose: true,
    metastore:   "memcached://#{memcache_servers}",
    entitystore: "memcached://#{memcache_servers}"
  }
end

use Rack::Cache, rack_cache_opts if rack_cache_opts

run Sinatra::Application
