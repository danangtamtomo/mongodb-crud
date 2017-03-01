var express = require('express')
var router = express.Router()
var Customers = require('../controllers/customers')

/* GET users listing. */
router.get('/', Customers.getCustomers)

router.post('/', Customers.createCustomer)

router.delete('/:id', Customers.deleteCustomer)

router.put('/:id', Customers.updateCustomer)

module.exports = router
