FROM node:14

WORKDIR /usr/src/app

COPY . ./

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

RUN yarn

RUN yarn build

CMD [ "yarn", "start" ]