FROM node:latest

COPY ["package*.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "start:dev"]