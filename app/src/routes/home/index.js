"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
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
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

router.get("/next" , (req,res)=> {
    res.send("fisrt");
});

module.exports = router;
