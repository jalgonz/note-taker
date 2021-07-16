// Dependencies
const express = require("express");

//Create server
const app = express();
const PORT = process.env.PORT || 3000

//Read html, json and use public folder
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require('./routes/data')(app);
require('./routes/view')(app);

//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT" + ${PORT}`);
});