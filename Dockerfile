FROM ruby:3.1.0

WORKDIR /app


COPY Gemfile ./
COPY Gemfile.lock ./
COPY package.json ./

RUN bundle install

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn

RUN yarn install


COPY ./ ./
