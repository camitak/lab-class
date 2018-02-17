const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var elementSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image_url: {
        type: String
    }
});

module.exports = mongoose.model('Element', elementSchema);