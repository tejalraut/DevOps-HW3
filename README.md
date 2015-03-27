##Infrastructure fluency (DevOps HW 3)
=========================
Name: Tejal Raut

Unity ID: traut

Implementation (Option2)

### Setup

* The simple web servers are configured on localhost:3003 and localhost:3004
* The proxy is set on localhost:3007

### Web server working

The following functions are implemented for a simple web server:

1. set

When `/set` is visited, a new key is set with the value:
> "this message will self-destruct in 10 seconds"

Code snippet:


2. get

When `/get` is visited, the key is fetched, and value is sent back to the client. After the key is expired, it displays null to the client. The code snippet which does this function is:


3. recent

When `/recent`is visited, the most recently visited 5 sites are displayed. The hook is implemented as follows:


4. upload

Images can be uploaded to any of the web server using the command:
	
	curl -F "image=@./img/morning.jpg" localhost:300[3/4]/upload

5. meow

`/meow` displays the most recent uploaded image to the client. The function is implemented as:


6. remove

 `/remove` removes the image from the queue and displays 

### Redis
Redis client is configured as:
	var redis = require('redis')
	var client = redis.createClient(6379, '127.0.0.1', {})


### Proxy server

The proxy server which swaps the request between the two servers is implemented as:
