var express = require('express');
var app = express();
var port = process.env.PORT || 8000;


// Tell Express to look for ejs templates inside our static files, using the
// installed ejs library
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // Use res.render to "pass in values" that the HTML document will be able to render
  // into the template (see below)
  res.render('index', {name: "Rumplestilskin", country:"Mexico"});
});

app.listen(port, function () {
  console.log("running on localhost:"+port);
});
