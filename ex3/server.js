const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));

// Tell Express to look for ejs templates inside our static files, using the
// installed ejs library
app.set('view engine', 'ejs');

app.get('/users', function(req, res){
  // Use res.render to "pass in values" that the HTML document will be able to render
  // into the template (see below)
  knex('users').then((results)=>{
    res.render('users', {users:results});
  })
});

app.post('/users', function(req, res) {
  knex('users').insert({
    name:req.body.name,
    email:req.body.user_email,
    age:req.body.age
  }).then(()=>{
    res.redirect('/users')
  })
});

app.listen(port, function () {
  console.log("running on localhost:"+port);
});
