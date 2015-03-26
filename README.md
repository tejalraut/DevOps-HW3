Infrastucture fluency. (DevOps HW 3)
=========================

### Setup

* The simple web servers are configured on localhost:3003 and localhost:3004.
* The proxy is set on localhost:3007

### Web server working

The following functions are implemented for a simple web server:
1. set


2. get


3. recent


4. upload
Images can be uploaded to any of the web server using the command:
	curl -F "image=@./img/morning.jpg" localhost:300[3/4]/upload

5. meow


6. remove


### Redis
Redis client is configured as:
	var redis = require('redis')
	var client = redis.createClient(6379, '127.0.0.1', {})

### An expiring cache

Create two routes, `/get` and `/set`.

When `/set` is visited, set a new key, with the value:
> "this message will self-destruct in 10 seconds".

Use the expire command to make sure this key will expire in 10 seconds.

When `/get` is visited, fetch that key, and send value back to the client: `res.send(value)` 


### Recent visited sites

Create a new route, `/recent`, which will display the most recently visited sites.

There is already a global hook setup, which will allow you to see each site that is requested:

	app.use(function(req, res, next) 
	{
	...

Use the lpush, ltrim, and lrange redis commands to store the most recent 5 sites visited, and return that to the client.

### Cat picture uploads: queue

Implement two routes, `/upload`, and `/meow`.
 
A stub for upload and meow has already been provided.

Use curl to help you upload easily.

	curl -F "image=@./img/morning.jpg" localhost:3000/upload

Have `upload` store the images in a queue.  Have `meow` display the most recent image to the client and *remove* the image from the queue.

### Proxy server

Bonus: How might you use redis and express to introduce a proxy server?

See [rpoplpush](http://redis.io/commands/rpoplpush)
