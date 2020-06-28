FROM node:14.4-alpine
WORKDIR /app
RUN npm init --y
RUN npm install -g express ejs
RUN npm install -g ionic cordova
RUN npm install nodemon
COPY ./config/package.json /app/package.json
CMD ["npm run start"]
