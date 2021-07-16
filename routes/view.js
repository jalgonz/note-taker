const path = require("path");


function view (app) {
    //route to notes page
  app.get("/notes", (req, res) => 
  res.sendFile(path.join(__dirname,"../public/notes.html")));

  // route to index page
  app.get("*", (req, res) => 
  res.sendFile(path.join(__dirname,"../public/index.html")));
};

// Exporting file
module.exports = view;