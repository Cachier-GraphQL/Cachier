# syntax=docker/dockerfile:1
FROM node:12
# RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "run", "dev" ]