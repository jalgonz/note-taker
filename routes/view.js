const path = require("path");
const router = require("express").Router();

//Route for index page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Route for notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
  
module.exports = router;