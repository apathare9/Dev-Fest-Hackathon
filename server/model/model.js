const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String
        // required: true
    },
    topic : {
        type: String
        // required: true  
        // unique: true
    },
    summary : {
        type: String
        // required: true  
        // unique: true
    },
    salary : String
    // status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;