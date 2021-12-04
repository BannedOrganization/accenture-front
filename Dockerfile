FROM node:14.17-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm ci -q

COPY ./ /usr/src/app

RUN npm run build