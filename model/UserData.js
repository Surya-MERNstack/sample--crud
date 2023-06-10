const mongoose = require('mongoose');

const UserData = mongoose.Schema({
    id :{
        type :String,
        required : true,
        unique : true
    },
    name :{
        type :String,
        required : true
    },
    age :{
        type :String,
        required : true
    },
    email :{
        type :String,
        required : true
    },

})


const UsersData = mongoose.model('UsersData' , UserData);

module.exports =  UsersData;