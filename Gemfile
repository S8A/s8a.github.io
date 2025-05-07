source "https://rubygems.org"

gem "jekyll", :group => [:jekyll_plugins]
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
  gem "jekyll-thumbnail-img"
  gem "jekyll-postcss-v2", :git => "https://github.com/S8A/jekyll-postcss-v2.git", :branch => "feature/change_hook_to_site_post_write"
  gem "jekyll-inline-svg"
  gem "jekyll-esbuild", :git => "https://github.com/S8A/jekyll-esbuild.git"
end

# Workaround for segmentation fault on Alpine Linux
# https://github.com/protocolbuffers/protobuf/issues/16853#issuecomment-2583135716
install_if -> { RUBY_PLATFORM =~ /linux-musl/ } do
  gem "google-protobuf", force_ruby_platform: true
end
