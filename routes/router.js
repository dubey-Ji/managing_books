const express = require('express');
const router = express.Router();
const Books = require('../models/Books');


router.get('/books', async (req, res) => {
  try {
    const books = await Books.find({});
    if (books.length > 0) {
      return res.send(books);
    }
    return res.send('No data found');
  } catch (err) {
    console.error(err);
    return res.send('Opps Something went wrong');
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const book = await Books.findOne({_id: req.params.id});
    if (Object.keys(book).length > 0) {
      return res.send(book);
    }
    return res.send('No data found');
  } catch (err) {
    console.error(err);
    return res.send('Opps Something went wrong');
  }
});

router.post('/create-books', (req, res) => {
  let book = new Books(req.body);
  book.save()
  .then(doc => {
    return res.send(doc);
  })
  .catch(err => {
    console.error(err);
    return res.send('Opps Something went wrong');
  });
});

router.put('/updateBook/:id', async (req, res) => {
  try {
    const book = await Books.updateOne({_id: req.params.id}, {$set: req.body});
    return res.send(book)
  } catch (error) {
    console.log(error);
    res.status(401);
    return res.send('Opps something went wrong');
  }
});

router.delete('/deleteBook/:id', async (req, res) => {
  try {
    const book = await Books.deleteOne({_id: req.params.id});
    return res.send(book);
  } catch (error) {
    console.error(error);
    res.status(401);
    return res.send('Opps something went wrong');
  }
});

module.exports = router;
