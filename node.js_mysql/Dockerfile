FROM node:14.4-alpine
WORKDIR /app
RUN /bin/sh -c 'npm init -f'
RUN npm install express ejs
RUN npm install nodemon
RUN npm install mysql
RUN mkdir -p /app/views
COPY ./config/app.js /app
COPY ./config/package.json /app
COPY ./config/hello.ejs /app/views
CMD ["npm", "run", "start"]
