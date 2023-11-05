const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bookRouter = require('./routes/router');
const options = require('./docs/basicInfo');
const { MongoClient } = require('mongodb')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// require('./routes/router')
options.apis = ['./routes/*.js']
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { customSiteTitle: 'Book Managing API' }));
// Create Instance of MongoClient for mongodb
const client = new MongoClient(URI);

// Connect to database
client.connect()
.then(() => console.log('Db Connected Successfully'))
.catch(error => console.log('Failed to connect', error))

app.use('/api', bookRouter);


app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`)
});
