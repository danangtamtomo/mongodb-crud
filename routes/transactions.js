var express = require('express')
var router = express.Router()
var Transactions = require('../controllers/transactions')

/* GET users listing. */
router.get('/', Transactions.getTransactions)

router.post('/', Transactions.createTransaction)

router.delete('/:id', Transactions.deleteTransaction)

router.put('/:id', Transactions.updateTransaction)

module.exports = router
