FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
RUN npm run build
EXPOSE 3001
ENTRYPOINT [ "node", "./demo/server/server.js" ]