# syntax=docker/dockerfile:1
FROM node:16
# RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . /app/
RUN npm install
EXPOSE 3000
# CMD [ "npm", "run", "dev" ]
ENTRYPOINT [ "node" , "/app/demo/server/server.js"]