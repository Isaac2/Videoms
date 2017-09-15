/**
* Main app routes
*/
'use strict';

var express    = require('express');

module.exports = function(app,upload){
//Routes for the API
var router = express.Router();

router.use(function(req, res, next) {
  next();
});

//general routes
router.get('/', function(req,res){
  res.json({
    microservice: 'taks-microservice',
    owner: 'Emmanuel'
  });
});

router.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
    console.log(req.file);
    console.log(req.body);
    res.status(200).send("aloha");
})


  app.use('/api', router);
};
