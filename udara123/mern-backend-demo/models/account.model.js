const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
    fullname: {type: String,require: true},
    nic: {type: String,require: true},
    contact: {type: Number,require: true},
    dob: {type: Date,require: true},
    purpose: {type: String,require: true},
    gender: {type: String,require: true},
    civilStatus: {type: String,require: true},
    address: {type: String,require: true},
    branch: {type: String,require: true},
}, {
    timestamps: true,
});

const Account = mongoose.model('Account',accountSchema);
module.exports = Account;