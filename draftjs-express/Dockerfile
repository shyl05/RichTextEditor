FROM node:alpine

WORKDIR /draftjs-express

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]