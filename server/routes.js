/**
 * Main app routes
 */
'use strict';

var express = require('express');
var fs = require('fs');
var multer = require('multer');
var path = require('path')



module.exports = function(app) {
  //Routes for the API
  var router = express.Router();

  router.use(function(req, res, next) {
    next();
  });

  //general routes
  router.get('/', function(req, res) {
    res.json({
      microservice: 'taks-microservice',
      owner: 'Emmanuel'
    });
  });

  router.post('/file', function(req, res) {
    var upload = multer({
      storage: multer.memoryStorage()
    }).single('userVideo')
    upload(req, res, function(err) {
    ;
      var buffer = req.file.buffer
      var type = (req.file.originalname.split("."))[1]
      if(type === "mp4"){
      var filename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname);
      fs.writeFile('./uploads/' + filename, buffer, 'binary', function(err) {
        if (err){
          res.status(500).end("File couldn't be saved");
        }
      });
        res.status(200).end('File is uploaded!');
      }
      else{
        res.status(500).end('Invalid type of file')
      }

    });
  });


  app.use('/api', router);
};
