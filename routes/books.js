var express = require('express')
var router = express.Router()
var Books = require('../controllers/books')

/* GET users listing. */
router.get('/', Books.getBooks)

router.post('/', Books.createBook)

router.delete('/:id', Books.deleteBook)

router.put('/:id', Books.updateBook)

module.exports = router
