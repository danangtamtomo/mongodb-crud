var mongoose = require('mongoose')
var bookSchema = mongoose.Schema({
  isbn: {
    type: String,
    unique: true
  },
  title: String,
  author: String,
  category: String,
  stock: Number
}, {
  timestamps: true
})

var book = mongoose.model('Book', bookSchema)

module.exports = book
