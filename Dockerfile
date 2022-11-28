FROM node:16
WORKDIR /app
COPY package*.json /app/
COPY postcss.config.js /app/
COPY tailwind.config.js /app/
COPY tsconfig.json /app/
COPY webpack.config.js /app/
RUN npm install
COPY dist /app/
ENTRYPOINT [ "node", "/app/dist/bundle.js" ]