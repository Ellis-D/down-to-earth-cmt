var express = require("express"); //express requiren
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('nieuwsFile').nieuws, ///zie json file als je voor nieuws kiest dan kies je nieuws, anders categorieen
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
