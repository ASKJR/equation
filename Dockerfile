# build environment
FROM node:16.17.0-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . /app

# production environment
FROM nginx:1.16.0-alpine
# Base system dependencies
RUN apk add --no-cache \
  curl \
  git \
  bash \
  nano

RUN apk upgrade libssl1.0 --update-cache
RUN apk add wget ca-certificates
COPY --from=build /app/dist/equation /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
