const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User',userSchema);
module.exports = User;