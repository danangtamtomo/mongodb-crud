var mongoose = require('mongoose')
var transactionSchema = mongoose.Schema({
  memberid: {
    type: String,
    unique: true
  },
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{_book: { type: Schema.Types.ObjectId, ref: 'Book' }, qty: Number}]
}, {
  timestamps: true
})

var customer = mongoose.model('Customer', customerSchema)

module.exports = customer
