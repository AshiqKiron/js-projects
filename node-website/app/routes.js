/* //import the http model
var http = require('http');

//handle sending requests and returning responses
function handleRequests(req, res) {
    //return string
    res.end('Hello World!');
}

//create the server
var server = http.createServer(handleRequests);

//start server and list on port x
server.listen(8080, function() {
    console.log('Listen on port 8080');
}) */

//require express
var express = require('express');
var path = require('path');

//crate our router object
var router = express.Router();

//export our router
module.exports = router;


//route for our homepage
router.get('/', function(req,res) {
    res.render('pages/index');
});

//route for our about page
router.get('/about', function(req,res){
    res.render('pages/about');
});

//route for our contact page
router.get('/contact', function(req,res){
    res.render('pages/contact');
});
router.post('/contact', function(req,res){
    
});