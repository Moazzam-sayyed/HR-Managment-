let mongoose = require('mongoose');

//employe schema
let employeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

let employe = module.exports = mongoose.model('employe',employeSchema);
 

 