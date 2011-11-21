# A brief example on how to use the Nexmo module

Nexmo = require './nexmo'

auth =
	key			: 'INSERT-ACCOUNT-KEY'
	secret	: 'INSERT-ACCOUNT-SECRET'

nexmo = Nexmo.init auth

simpleSMS = 
	from	: 'Wilhelmbot'
	to		: 528100000000
	text	: 'Greetings from the Matrix'
	
faultySMS = 
	from	:	'Anonymous'

nexmo.setMessage simpleSMS

nexmo.send (response) ->
	error = response.messages[0]?['error-text']
	balance = response.messages[0]?['remaining-balance']

	if error?
		console.log "Error: #{error}"
	else
		console.log "Message delivered"

	console.log "Remaining balance: #{balance}" if balance?

