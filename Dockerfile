FROM jekyll/jekyll:latest

# Install ImageMagick
RUN apk add --no-cache imagemagick

# Set working directory
WORKDIR /srv/jekyll

# The default command from the parent image will be used (jekyll serve)
