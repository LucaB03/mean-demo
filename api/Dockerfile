FROM node:20.13.1
LABEL authors="Luca Manuel Blase"

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 3000

EXPOSE 3000

CMD ["node", "index.js"]