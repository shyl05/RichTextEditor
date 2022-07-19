FROM node:alpine

WORKDIR /draftjs-example

COPY package*.json ./

COPY ./ ./

RUN npm install

CMD ["npm", "run", "start"]