source "https://rubygems.org"

gem "jekyll", :group => [:jekyll_plugins, :jekyll_thumbnail_img]
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-avatar"
  gem "jekyll-feed"
  gem "jekyll-gist"
  gem "jekyll-github-metadata"
  gem "jekyll-include-cache"
  gem "jekyll-mentions"
  gem "jekyll-optional-front-matter"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-relative-links"
  gem "jekyll-remote-theme"
  gem "jekyll-sass-converter"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-titles-from-headings"
  gem "jemoji"
  gem "kramdown"
end

group :jekyll_thumbnail_img do
  gem "jekyll-thumbnail-img", git: "https://github.com/S8A/jekyll-thumbnail-img.git", branch: "feature/cache_thumbnails_and_allow_variable_width"
  gem "mini_magick"
end

# Workaround for segmentation fault on Alpine Linux
# https://github.com/protocolbuffers/protobuf/issues/16853#issuecomment-2583135716
gem "google-protobuf", force_ruby_platform: true if RUBY_PLATFORM.include?("linux-musl")
