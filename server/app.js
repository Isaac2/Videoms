/**
*  Main app file
*/
'use strict';

//set default node enviroment for development
var env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;


//dependencies

var express  = require ('express');
var multer  = require('multer');
var fileUpload = require('express-fileupload');

//setup server
console.log('Starting server...');
var app = express();
var upload = multer({ dest: 'uploads/' });
app.use(fileUpload());

require ('./routes') (app,upload);

app.listen(PORT);
console.log('Server listening on port: ' + PORT);
