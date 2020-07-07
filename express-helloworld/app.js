var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/gregrozon', function (req, res) {
  res.send('Hello Greg!!!\n\nThis is my first git and Openshift Deployment!!!!\n\nMe noob, so me impressed!!!!');
});

app.get('/danno', function (req, res) {
  res.send('Hello \'No Time For That\' Danno!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

