FROM node:20

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . . 
EXPOSE 3010
CMD [ "npm", "start" ]
