NexmoJS
=
A node implementation of Nexmo REST API written in Coffeescript.  

[Nexmo][] is a cloud-based SMS API that lets you send and receive high volume of messages at wholesale rates.  

For more information on the API check Nexmo's [Nexmo Docs][].  

How to use  
-

**Import**

	Nexmo = require './nexmo'

**Initialize**

	auth =
		key		: 'INSERT-ACCOUNT-KEY'
		secret	: 'INSERT-ACCOUNT-SECRET'

	nexmo = Nexmo.init auth

**Configure**

	simpleSMS = 
		from	: 'Wilhelmbot'
		to		: 528100000000
		text	: 'Greetings from the Matrix'
	
	nexmo.setMessage simpleSMS

**Send**

	nexmo.send (response) ->
		error = response.messages[0]?['error-text']
		balance = response.messages[0]?['remaining-balance']

		if error?
			console.log "Error: #{error}"
		else
			console.log "Message delivered"

		console.log "Remaining balance: #{balance}" if balance?

**w00t**  

Author  
-  

Rod Wilhelmy: [Github][]/[Twitter][]  

License  
-  

(The MIT License)

Copyright (c) 2011 Rodolfo Wilhelmy <[rwilhelmy@gmail.com](mailto:rwilhelmy@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Nexmo]: http://www.nexmo.com/index.html "Nexmo"  
[Nexmo Docs]: http://www.nexmo.com/documentation/ "documentation"  
[Github]: https://github.com/wilhelmbot "Github"
[Twitter]: https://twitter.com/#!/rod_wilhelmy "Twitter"

