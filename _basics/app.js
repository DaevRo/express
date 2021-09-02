const  express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log('started on port 3000.');
});