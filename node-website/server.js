// require dependencies 
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

//use ejs and express layouts
app.set('pages engine', 'ejs');
app.use(expressLayouts);

//route our app
var router = require('./app/routes');
//this make sure the routing works accordingly
app.use('/', router);

//set static files (css, images etc) location
app.use(express.static(__dirname+ '/public'));

//start the server
app.listen(port, function(){
    console.log('app started');
});
