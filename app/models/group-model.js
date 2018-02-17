const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var groupSchema = new Schema({
    name:{
        type: String,
        required: 'Enter the group name'
    },
    owner_id:{
        type: String,
        required: 'Owner id'
    },
    experiment_id:{
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Group', groupSchema);