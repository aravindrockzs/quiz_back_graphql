const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = require('./schema/schema');

//environments

require('dotenv').config();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => {
    console.log('quiz db connnected');
  })
  .on('error', (err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log('Listening at 3000');
});
