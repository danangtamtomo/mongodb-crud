var Customer = require('../models/customer')

var Customers = {}

Customers.getCustomers = function (req, res, next) {
  Customer.find({})
    .then(function (customers) {
      res.send(customers)
    })
}

Customers.createCustomer = function (req, res, next) {
  var customer = new Customer(req.body)
  customer.save()
    .then(function (customer) {
      res.send({
        status: 'Ok',
        message: 'New customer has been created',
        customer: customer
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

Customers.updateCustomer = function (req, res, next) {
  Customer.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, customer) {
      res.send({
        status: 'Ok',
        message: `${req.body.name} has been updated`,
        updated_customer: customer
      })
    })
}

Customers.deleteCustomer = function (req, res, next) {
  Customer.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The customer has been deleted`
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

module.exports = Customers
