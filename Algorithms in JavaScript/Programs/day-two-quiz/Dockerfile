FROM node:latest
WORKDIR /usr/dayTwoApp/src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000:3000
CMD [ "node", "index.js" ]
