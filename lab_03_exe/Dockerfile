FROM node:20

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

# verifing the logs folder exists
RUN mkdir -p logs

EXPOSE 3000

CMD [ "npm", "start" ]