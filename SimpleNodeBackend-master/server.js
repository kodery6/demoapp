const express = require('express');

const bodyParser = require('body-parser');
var router = require('./router/api');
const url = require('url');
var db = require('./db');
var app = express();
var cors = require('cors');
//create Server


app.use(cors());

app.use('/api',router);




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//createConnection

app.listen('3031', () => {
  console.log('Server started..');
});
