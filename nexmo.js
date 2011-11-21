(function() {
  var DEBUG, Nexmo, https, httpsRequestOptions;
  https = require('https');
  httpsRequestOptions = {
    host: 'rest.nexmo.com',
    path: '/sms/json'
  };
  DEBUG = true;
  Nexmo = (function() {
    function Nexmo(key, secret) {
      this.key = key;
      this.secret = secret;
    }
    Nexmo.prototype.setMessage = function(configuration) {
      this.sender = configuration.from;
      this.recipient = configuration.to;
      this.text = configuration.text;
      if ((this.sender != null) && (this.recipient != null) && (this.text != null)) {
        return this.echo("Message setup correctly");
      } else {
        return this.echo('ERROR - from (string), to (number), and text (string) are mandatory fields');
      }
    };
    Nexmo.prototype.echo = function(content) {
      if (DEBUG) {
        return console.log("NEXMO: " + content);
      }
    };
    Nexmo.prototype.send = function(callback) {
      var print, query;
      query = "username=" + this.key + "&password=" + this.secret + "&from=" + this.sender + "&to=" + this.recipient + "&text=" + this.text;
      query = encodeURI(query);
      httpsRequestOptions.path += "?" + query;
      print = this.echo;
      https.get(httpsRequestOptions, function(res) {
        print("Server answered with HTTP " + res.statusCode);
        return res.on('data', function(body) {
          print(body);
          return callback(JSON.parse(body));
        });
      }).on('error', function(err) {
        return print("ERROR - " + err);
      });
      this.echo("API \n key = " + this.key + " \n secret = " + this.secret);
      this.echo("Sending message \n From: '" + this.sender + "' \n To: " + this.recipient + " \n Message: " + this.text);
      return this.echo("Sending GET request to: " + httpsRequestOptions.path);
    };
    return Nexmo;
  })();
  module.exports.init = function(configuration) {
    return new Nexmo(configuration.key, configuration.secret);
  };
  module.exports._class = Nexmo;
}).call(this);
