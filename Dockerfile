FROM node:10-alpine

WORKDIR /srv

RUN apk update && apk add yarn

EXPOSE 4000

VOLUME /srv

CMD yarn install && yarn build && node server/server.js
