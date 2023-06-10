const express = require('express');
const mongoose = require('mongoose');


const dburl = 'mongodb://0.0.0.0:27017/UsersData';

mongoose.connect(dburl , {useNewUrlParser : true});

const connect = mongoose.connection;

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended : false}))

try{
    connect.on('open',() => {
        console.log('mongoDb is connected');
    })
}
catch(err) {
 console.log(ReferenceError , err)
}

const UserRouter = require('./routers/userspath');

app.use("/userdatas",UserRouter)

app.listen(3000, () => {
    console.log('Server is running 3000!!!')
})