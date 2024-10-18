const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dishes = require('./data');
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public" + "/index.html");
  
});

app.get('/dishes', (req, res) => {  
  res.json(dishes);
});

app.get('/dishes/:type', (req, res) => {
  const dType = dishes.find((h) => h.type == req.params.type);
  if (dType) {
    res.send(dType);
  } else {
    res.status(404).send('Dish not found');
  }
});

app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});
