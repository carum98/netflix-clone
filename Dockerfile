FROM node:19-alpine3.16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]