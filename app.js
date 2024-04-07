require("dotenv").config();

const express=require("express")

const app = require('express')();
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);
app.set("view engine","ejs")
app.use(express.static("public"));

http.listen(3000, function(){
    console.log('Server is running');
});