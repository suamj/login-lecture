"use strict";
//module
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require('path');

//routing
const home = require("./src/routes/home");


// app setting 
app.set("views", "./src/views");
app.set("view engine", "ejs");

/* move to routes/home/index.js
app.get("/", (req,res)=> {
    //res.send("ROOT page");
    res.render("home/index");
});

app.get("/login", (req,res)=> {
   // res.send("login Page"); 
    res.render("home/login");

});
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/",home ); //enroll middleware


app.use(express.static(path.join(__dirname, '/src/public') ) ); //public/js ... to view/login.js 
//app.use(express.static(`${__dirname}/src/public`) ); //public/js ... to view/login.js 

// move to bin/www.js
/*
app.listen(PORT, function(){
    console.log("server is running");
});
*/
module.exports= app;


