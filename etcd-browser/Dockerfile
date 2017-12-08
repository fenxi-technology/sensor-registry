FROM ubuntu:14.04

MAINTAINER Christoph Wiechert <wio@psitrax.de>
MAINTAINER https://github.com/henszey

RUN apt-get update
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get install -y nodejs

RUN mkdir /app
ADD . /app/

WORKDIR /app
EXPOSE 49502

CMD ["nodejs", "server.js"]
