# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.0"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.3"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
# gem "sprockets-rails", ">= 3.4.1"

# Use postgresql as the database for Active Record
gem "pg"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
# gem "importmap-rails", ">= 0.9.2"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
# gem "turbo-rails", ">= 0.9.0"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
# gem "stimulus-rails", ">= 0.7.3"

# Use Tailwind CSS [https://github.com/rails/tailwindcss-rails]
# gem "tailwindcss-rails", ">= 0.5.3"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder", "~> 2.11"

# Use devise for authentication
gem "devise", git: "https://github.com/heartcombo/devise", branch: "main"

# Use devise_invitable for inviting users
gem "devise_invitable", "~> 2.0", ">= 2.0.6"

# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.4", require: false

# Use Sass to process CSS
# gem "sassc-rails", "~> 2.1"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", ">= 1.2"

# Webpack bundler for rails
gem "webpacker"

# React hook for rails
gem "react-rails"

# Use SCSS for stylesheets
gem "sass-rails"

##--- gems for server & infra configuration ---##
gem "dotenv-rails"
gem "foreman"

# info of countries and state
gem "countries"

# Letter opener can be configured to avoid sending sending actual emails whenever required.
gem "letter_opener_web"

# currency list and conversion
gem "money"

# aws storage account
gem "aws-sdk-s3", require: false

# Ransack gem for advanced searching
gem "ransack"

# For Soft deletion
gem "discard", "~> 1.2"

# Use newrelic for monitoring
gem "newrelic_rpm", "~> 8.4"

# Role management library with resource scoping
gem "rolify", "~> 6.0"

# OAuth Gems
gem "omniauth-google-oauth2", "~> 1.0"
gem "omniauth-rails_csrf_protection", "~> 1.0"

# Pundit gem for user authorization
gem "pundit", "~> 2.2"

# Data migration gem to migrate data alongside schema changes
gem "data_migrate", "~> 8.0.0.rc2"

# pagy for Pagination
gem "pagy", "~> 5.10"

# Manage application specific business logic. https://github.com/AaronLasseigne/active_interaction
gem "active_interaction"

# For stripe payments
gem "stripe"

# Background job processing adapter
gem "sidekiq"

# searchkick for elasticsearch
gem "elasticsearch", "< 7.14" # select one
gem "searchkick"

# PDF generator
gem "grover"

gem "activerecord-import"

# Honeybadger for error reporting
gem "honeybadger"

# For finding the vulnerabilities in the gems
gem "bundler-audit", require: false
gem "ruby_audit", require: false

group :development, :test do
  # See https://edgeguides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", ">= 1.0.0", platforms: %i[mri mingw x64_mingw]

  # Add Rubocop to lint and format Ruby code
  gem "rubocop", require: false
  gem "rubocop-packaging", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", "~> 2.8", require: false

  # Use RSpec as the testing framework
  gem "rspec-rails", "~> 5.0", ">= 5.0.2"

  # Simple one-liner tests for common Rails functionality
  gem "shoulda-callback-matchers", "~> 1.1.1"
  gem "shoulda-matchers", "~> 5.1"

  # Use factory-bot to replace fixtures
  gem "factory_bot_rails"

  # Use Faker for fake data
  gem "faker"

  # Added rails controller to use render_template
  gem "rails-controller-testing", "~> 1.0", ">= 1.0.5"

  # help to kill N+1 queries and unused eager loading. https://github.com/flyerhzm/bullet
  gem "bullet"
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console", ">= 4.1.0"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  gem "rack-mini-profiler", ">= 2.3.3"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  gem "spring"

  # Annotate gem for showing schema information
  gem "annotate"

  gem "letter_opener"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara", ">= 3.26"
  gem "selenium-webdriver", ">= 4.0.0"
  gem "webdrivers"

  # Use Codecov for code coverage analysis
  gem "simplecov", require: false

  # Strategies for cleaning databases in Ruby.
  gem "database_cleaner", "~> 2.0"
end