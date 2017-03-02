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
    booklist: [{
        _book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },
        qty: Number
    }]
}, {
    timestamps: true
})

var transaction = mongoose.model('Transaction', transactionSchema)

module.exports = transaction