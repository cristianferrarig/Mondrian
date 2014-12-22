set :index_file, "/demo/index.html"

# sprockets.append_path File.join "#{root}", "bower_components"

set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir,  'assets/fonts'

set :source,       'app/'
set :layouts_dir,  'demo/'
set :layout,       '_layout'
set :build_dir,    'src/'

configure :development do
  # Reload the browser automatically whenever files change
  #activate :livereload

  # set :debug_assets, true
end

sprockets.append_path File.join "#{root}", "vendor/bower"

# Build-specific configuration
configure :build do

  # Ignoring files
  # ignore 'javascripts/lib/*'

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Minify HTML files
  # activate :minify_html

  # Use relative URLs
  # activate :relative_assets
end

# activate :deploy do |deploy|
#   deploy.method = :git
#   deploy.build_before = true # default: false
#   # Optional Settings
#   # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
#   # deploy.branch   = 'custom-branch' # default: gh-pages
#   # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
#   # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
# end
