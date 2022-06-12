//npm init
//npm install express ws

const express = require('express');
const app = express();

app.use("/" , function(req, res){
  res.sendFIle(__dirname + '/index.html');
});

app.listen(8080);
