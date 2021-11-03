FROM node:14.17

WORKDIR /var/www/app

RUN apt-get update && apt-get -f -y install unzip wget curl vim

COPY package.json /var/www/app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]
