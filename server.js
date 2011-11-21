(function() {
  var Nexmo, auth, faultySMS, nexmo, simpleSMS;
  Nexmo = require('./nexmo');
  auth = {
    key: 'INSERT-ACCOUNT-KEY',
    secret: 'INSERT-ACCOUNT-SECRET'
  };
  nexmo = Nexmo.init(auth);
  simpleSMS = {
    from: 'Wilhelmbot',
    to: 528100000000,
    text: 'Greetings from the Matrix'
  };
  faultySMS = {
    from: 'Anonymous'
  };
  nexmo.setMessage(simpleSMS);
  nexmo.send(function(response) {
    var balance, error, _ref, _ref2;
    error = (_ref = response.messages[0]) != null ? _ref['error-text'] : void 0;
    balance = (_ref2 = response.messages[0]) != null ? _ref2['remaining-balance'] : void 0;
    if (error != null) {
      console.log("Error: " + error);
    } else {
      console.log("Message delivered");
    }
    if (balance != null) {
      return console.log("Remaining balance: " + balance);
    }
  });
}).call(this);
