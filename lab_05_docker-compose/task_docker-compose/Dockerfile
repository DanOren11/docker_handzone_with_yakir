FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

EXPOSE 3000

COPY . .

CMD ["npm", "start"]