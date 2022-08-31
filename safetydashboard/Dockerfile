FROM node:18-alpine3.15

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package-lock.json .
COPY package.json .

RUN npm install && npm cache clean --force
COPY . .

EXPOSE 5555

CMD ["npm", "run", "dev"]
