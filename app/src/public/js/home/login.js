"use srtict";
console.log("hello");

const id = document.querySelector("#id"),
    passwd=document.querySelector("#passwd"),
    loginBtn=document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    // object
    const req = {
        id:  id.value,
        passwd : passwd.value 
    };
    console.log(id.value ,  req ,"hi " , JSON.stringify(req));  

    // to server  API == app.js 
    // from front to server send data 
    fetch("/login", {
        method : "POST",
        headers : {
                "Content-Type" : "application/json",
        },
        body: JSON.stringify(req) ,    
    });      
}




