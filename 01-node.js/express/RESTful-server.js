// SETUP
// ========================================================

// npm packages
var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var port   = process.env.port || 8080;  // set port
var router = express.Router();          // instance of express router
// api routes
router.get('/', function(req, res) {
  res.json({ message:'hello world, with api'});
});

// REGISTER ROUTES
app.use('/api', router);

// START server
app.listen(port);
console.log('connected to port' + port);
