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

[Nexmo]: http://www.nexmo.com/index.html Nexmo  
[Nexmo Docs]: http://www.nexmo.com/documentation/ documentation  

