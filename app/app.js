"use strict";
//module
const express = require("express");
const app = express();


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
app.use("/",home ); //enroll middleware

// move to bin/www.js
/*
app.listen(PORT, function(){
    console.log("server is running");
});
*/
module.exports= app;


