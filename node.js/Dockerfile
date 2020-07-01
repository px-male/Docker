FROM node:14.4-alpine
WORKDIR /app
RUN npm init -f
RUN npm install -g express ejs
RUN npm install -g ionic cordova
RUN npm install nodemon
RUN mkdir -p /app/views
COPY ./config/package.json /app/package.json
COPY ./config/hello.ejs /app/views
CMD ["sh"]
