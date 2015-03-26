var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var request = require('request')
var app = express()
var count = 1
var recentList = null
// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})
//client.set("key", "value");
//client.get("key", function(err,value){ console.log(value)});

//client.on('error', function(error)
//{
//	console.log("Error while connecting the socket connection");
//});

//client.set('key', 'value');
//client.get('key', function(err,value)
//{
//	console.log('The value is: ' + value);
//});

// WEB ROUTES

// Add hook to make it easier to get all visited URLS.
app.use(function(req, res, next) 
 {
	client.lpop('servers', req.url, function(err, reply){
	client.ltrim('servers', 0, 1);
	console.log(reply);
	});
 	next(); // Passing the request to the next handler in the stack.
 });

app.get('/get', function(req, res) {
 	var response = null;
	request('/get', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
})

var server = app.listen(3007, function () {
   
   var host = server.address().address
   var port = server.address().port

   console.log('Proxy Server', host, port)
   client.rpush('servers','3003');
   client.rpush('servers','3004');
 });