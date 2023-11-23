const mongoose = require('mongoose')
// const URI_WITH_COLLECTION = process.env.URI + '/local';
mongoose.connect('mongodb://mongo-server:27017/local');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  summary: String
});

const Books = mongoose.model('Books', BookSchema);

module.exports = Books;
