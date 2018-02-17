const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var experimentSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    elements: {
        first_element:{
            type: String,
            required: true
        },
        second_element:{
            type: String
        }
    },
    results: {
        color:{
            type: String
        },
        formula:{
            type: String
        }
    }
});

module.exports = mongoose.model('Experiment', experimentSchema);