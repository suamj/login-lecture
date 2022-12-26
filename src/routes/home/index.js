"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl.");
/*
router.get("/", (req,res)=> {
    //res.send("ROOT page");
    res.render("home/index");
});
router.get("/login", (req,res)=> {
   // res.send("login Page"); 
    res.render("home/login");

});
*/
router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

router.get("/next" , (req,res)=> {
    res.send("fisrt");
});

module.exports = router;
