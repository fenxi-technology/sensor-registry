FROM ubuntu:14.04

MAINTAINER Christoph Wiechert <wio@psitrax.de>
MAINTAINER https://github.com/henszey

RUN apt-get update && apt-get install -y nodejs
ENV DEBIAN_FRONTEND noninteractive

RUN mkdir /app
COPY . /app/

WORKDIR /app
EXPOSE 49502

CMD ["nodejs", "server.js"]
