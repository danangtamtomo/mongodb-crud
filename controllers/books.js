var Book = require('../models/book')

var Books = {}

Books.getBooks = function (req, res, next) {
  Book.find({})
    .then(function (books) {
      res.send(books)
    })
}

Books.createBook = function (req, res, next) {
  var book = new Book(req.body)
  book.save()
    .then(function (book) {
      res.send({
        status: 'Ok',
        message: 'New book has been created',
        book: book
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

Books.updateBook = function (req, res, next) {
  Book.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, book) {
      res.send({
        status: 'Ok',
        message: `${req.body.title} book has been updated`,
        updated_book: book
      })
    })
}

Books.deleteBook = function (req, res, next) {
  Book.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The book has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}

module.exports = Books
