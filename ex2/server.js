var express = require('express');
var fs = require('fs')
var app = express();
var port = process.env.PORT || 8000;


// Tell Express to look for ejs templates inside our static files, using the
// installed ejs library
app.set('view engine', 'ejs');

app.get('/users', function(req, res){
  // Use res.render to "pass in values" that the HTML document will be able to render
  // into the template (see below)
  fs.readFile("./storage.json", 'utf8', function(err, data){
    let usersArr = JSON.parse(data);

    res.render('users', {users: usersArr});

  })
});

app.listen(port, function () {
  console.log("running on localhost:"+port);
});
