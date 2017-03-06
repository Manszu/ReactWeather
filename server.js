var express = require('express');

// Create our app
var app = express();
var port= process.env.PORT || 3000;


app.use(function (req,res,next){ //change the protocol from https to http:
  if(req.headers['x-forwarded-proto'] === 'http'){
    next(); //next function
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }

});


app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port 3000' + port);
});
