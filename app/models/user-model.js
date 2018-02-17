const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        index: {
            unique: true
        },
        required: 'Enter a valid username'
    },
    firstname:{
        type: String,
        required: 'Enter your first name'
    },
    lastname:{
        type: String,
        required: 'Enter your last name'

    },
    password:{
        value: {
            type: String,
            required: 'Enter a valid password',
        },
        updated_date: {
            type: Date,
            default: Date.now
        }
    },
    create_date:{
        type: Date,
        default: Date.now
    },
    groups_ids:{
        type: Array
    }
});

module.exports = mongoose.model('User', userSchema);