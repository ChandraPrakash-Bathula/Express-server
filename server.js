const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>HELLO WORLD!</h1>");
});

app.get("/contact", function(req,res){
    res.send('contact me at: chandu@gmail.com');
});

app.get("/about", function(req ,res){
    res.send("RAjendra the iam iam the rajendra");
});

app.get("/hobbies", function(req, res){
 res.send("<ul><li>Coffee</li><li>Code</li><li>INSTAGRAM</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000 servers");
});