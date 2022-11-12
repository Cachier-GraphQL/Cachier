//const path = require('path');
const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema.js');
const cacheMoney = require('./cacheMoney.js');
const cacheMoneyDemo = require('./cacheMoneyDemo.js');
const cors = require('cors');
const Redis = require('redis');
const REDIS_PORT = 6379;
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// creates a client on Redis for user to use as cache
const client = Redis.createClient(REDIS_PORT);
client.connect();

app.use(
  '/cacheMoney',
  cacheMoneyDemo('http://localhost:3000/graphql', 50, 5) // calling demo version rn -> change to cacheMoney before deploying
);

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.use((req, res) => res.status(404).send('Cannot get route'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));

module.exports = app;
