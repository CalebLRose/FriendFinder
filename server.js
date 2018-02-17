var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var port = process.env || 3000;

app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
