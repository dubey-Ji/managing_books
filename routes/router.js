const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - summary
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         summary:
 *           type: boolean
 *           description: Summary of the book
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         summary: Books is very good
 */

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', async(req, res) => {
  try {
    res.status(200);
    return res.send({success: true, data: 'Welcome to book managing apps'});
  } catch (error) {
    console.error(error);
    res.status(400);
    return res.send({success: false, data: 'Something went wrong'});
  }
});

/**
 * @swagger
 * /books:
 *  get:
 *    summary: Get all books
 *    description: Retrive a list of books
 *    responses:
 *      200:
 *        description: A list of books
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Book'
 */
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

/**
 * @swagger
 * /book/{id}:
 *  get:
 *    summary: Get information of a single book
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Number Id of the book.
 */
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

/**
 * @swagger
 * /create-books:
 *  post:
 *    summary: Create a JSON placeholder book
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *        schema:
 *          $ref: '#/components/schemas/Book'             
 */
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

/**
 * @swagger
 * /updateBook/{id}:
 *  put:
 *    summary: Update a JSON placeholder book
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Number Id of the book that needs to be updated
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *        schema:
 *          $ref: '#/components/schemas/Book'
 */
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

/**
 * @swagger
 * /deleteBook/{id}:
 *  delete:
 *    summary: Delete a book
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Number Id of the book that needs to be deleted
 */
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
