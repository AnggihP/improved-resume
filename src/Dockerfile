FROM node:18.15.0-alpine.17

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8800

CMD ["node", "index.js"]