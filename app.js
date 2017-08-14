var express = require("express");
var path = require("path");
var app = express();

app.set('nieuwsFile', require('./config/nieuws.json'));
app.set('categorieenFile', require('./config/categorieen.json')); //jsonfile


app.set("views", path.resolve(__dirname, "views")); //views file
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router")); ///3 routes/files die geruiquired worden (= aparte files)
app.use(require("./routes/nieuws_router"));
app.use(require("./routes/categorieen_router"));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});
