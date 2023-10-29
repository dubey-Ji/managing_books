const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/router');
const { MongoClient } = require('mongodb')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', bookRouter);

// Create Instance of MongoClient for mongodb
const client = new MongoClient(URI);

// Connect to database
client.connect()
  .then(() => console.log('Db Connected Successfully'))
  .catch(error => console.log('Failed to connect', error))



app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`)
});
