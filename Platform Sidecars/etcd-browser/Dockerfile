FROM node:carbon-alpine 

MAINTAINER Christoph Wiechert <wio@psitrax.de>
MAINTAINER https://github.com/henszey

RUN mkdir /app
COPY . /app/

WORKDIR /app
RUN npm install
EXPOSE 49502

CMD ["node", "server.js"]
