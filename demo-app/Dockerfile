FROM node:20.13.1 AS build
WORKDIR /usr/src/demo-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

EXPOSE 4000

CMD ["npm", "start"]
