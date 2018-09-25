const mongoose = require('mongoose');
mongoose.set('useFindandModify', false);

const Schema = mongoose.Schema;

const bankingSchema = new Schema({
    username: String,
    password: String,
    balance: Number
});

const bank = mongoose.model('Bank', bankingSchema);

module.exports = bank