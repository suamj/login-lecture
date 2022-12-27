"use strict";

const output= {

    hello : (req, res) => {
        res.render("home/index");
    },
    login :(req, res) => {
        res.render("home/login");
    }
    
}

const process = {
    login: (req,res) => {
        console.log("ctrl")
        console.log(req.body);
    }
// req OBJ in  temparary space 
// To use body  body-parser module iinstall 
}
module.exports = {
    output,
    process,
};

/*
    const hello = (req, res) => {
        res.render("home/index");
    };
    
    const login = (req, res) => {
        res.render("home/login");
    };


module.exports= {
    hello,
    login
}

//send object (key:value) -> default(hello:hello)
*/
