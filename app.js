require("dotenv").config();

const express=require("express")

const app = require('express')();
const path = require('path');
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);
app.set("view engine","ejs")
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/news',(req,res)=>{
    res.render("news");
})
app.get('/about',(req,res)=>{
    res.render("about");
})
app.get('/contact',(req,res)=>{
    res.render("contact");
})
app.get('/cloth',(req,res)=>{
    res.render("cloth");
})
app.get('/payment',(req,res)=>{
    res.render("payment");
})
app.get('/shoes',(req,res)=>{
    res.render("shoes");
})
app.get('/success',(req,res)=>{
    res.render("success");
})
http.listen(3000, function(){
    console.log('Server is running');
});
