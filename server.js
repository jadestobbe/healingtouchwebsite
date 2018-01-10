var express = require('express');
var app = express();

const port = process.env.PORT || '5000';

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
