FROM node:14.4-alpine
WORKDIR /app
RUN /bin/sh -c 'npm init -f'
RUN npm install -g express ejs ionic cordova
RUN npm install nodemon
RUN mkdir -p /app/views
COPY ./config/app.js /app
COPY ./config/package.json /app
COPY ./config/hello.ejs /app/views
CMD ["sh"]
