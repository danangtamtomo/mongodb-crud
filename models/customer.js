var mongoose = require('mongoose')
var customerSchema = mongoose.Schema({
  name: String,
  memberid: {
    type: String,
    unique: true
  },
  address: String,
  zipcode: String,
  phone: String
}, {
  timestamps: true
})

var customer = mongoose.model('Customer', customerSchema)

module.exports = customer
