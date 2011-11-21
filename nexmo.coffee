# A module to use Nexmo's REST API

https = require 'https'

#
# Static globals
#

httpsRequestOptions =
	host: 'rest.nexmo.com'
	path: '/sms/json'

DEBUG = yes

#
# Defines class Nexmo
#

class Nexmo	
	
	constructor: (@key, @secret) ->
		
	setMessage: (configuration) ->
		@sender = configuration.from
		@recipient = configuration.to
		@text  = configuration.text
		if @sender? and @recipient? and @text?
			@echo "Message setup correctly"
		else
			@echo 'ERROR - from (string), to (number), and text (string) are mandatory fields'
		
	echo: (content) ->
		console.log "NEXMO: #{content}" if DEBUG
		
	send: (callback) ->		
		# Build query
		query = "username=#{@key}&password=#{@secret}&from=#{@sender}&to=#{@recipient}&text=#{@text}"
		# URL encoding
		query = encodeURI query
		# Append query to path
		httpsRequestOptions.path += "?#{query}"
		
		print = @echo
		
		# Make request
		https.get httpsRequestOptions, (res) ->
			print "Server answered with HTTP #{res.statusCode}"
			res.on 'data', (body) ->
				print body
				callback JSON.parse(body)
		.on 'error', (err) ->
			print "ERROR - #{err}"

		# Debugging feedback
		@echo "API \n key = #{@key} \n secret = #{@secret}"
		@echo "Sending message \n From: '#{@sender}' \n To: #{@recipient} \n Message: #{@text}"
		@echo "Sending GET request to: #{httpsRequestOptions.path}"

#
# Module Exports
#

module.exports.init = (configuration) ->
	new Nexmo configuration.key, configuration.secret

module.exports._class = Nexmo
