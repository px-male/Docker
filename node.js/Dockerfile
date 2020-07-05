FROM node:14.4-alpine
WORKDIR /app
RUN /bin/sh -c 'npm init -f'
#RUN npm install -g express ejs ionic cordova
RUN /bin/sh -c 'npm install nodemon'
#RUN /bin/sh -c 'mkdir -p /app/views'
WORKDIR views
COPY ./config/package.json /app/packages.json
COPY ./config/hello.ejs /app/views
CMD ["sh"]
