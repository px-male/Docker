FROM node:14.4-alpine
WORKDIR /app
RUN /bin/sh -c 'npm init -f ;\npm install nodemon'
#RUN npm install -g express ejs ionic cordova
#RUN npm install nodemon
RUN /bin/sh -c 'mkdir -p /app/views'
COPY ./config/package.json /app/package.json
COPY ./config/hello.ejs /app/views
CMD ["sh"]
