const mongoose = require('mongoose')



const personSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    gender : String,
    status : String

})


module.exports = mongoose.model ('Person',personSchema)