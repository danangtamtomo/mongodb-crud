var Transaction = require('../models/transaction')

var Transactions = {}

Transactions.getTransactions = function (req, res, next) {
  Transactions.find({})
    .then(function (transaction) {
      res.send(transaction)
    })
}

Transactions.createTransaction = function (req, res, next) {
  var transaction = new Transaction({
    memberid: req.body.memberid
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine.
  })


  transaction.booklist.push({_book:req.body.book_id, qty: req.body.qty})

  transaction.save()
    .then(function (transaction) {
      res.send({
        status: 'Ok',
        message: 'New customer has been created',
        customer: transaction
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

Transactions.updateTransaction = function (req, res, next) {
  Transaction.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (transaction) {
      res.send({
        status: 'Ok',
        message: `Transaction has been updated`,
        updated_transaction: transaction
      })
    })
}

Transactions.deleteTransaction = function (req, res, next) {
  Transaction.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The transaction has been deleted`
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

module.exports = Transactions
