// Dependencies
const express = require("express");

//Create server
const app = express();
const PORT = procces.env.PORT || 3000;

//Read html, json and use public folder
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//Listener
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});