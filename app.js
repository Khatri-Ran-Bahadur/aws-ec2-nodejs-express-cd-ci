const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello Node Js Application</h1>');
});

app.get('/products', (req, res) => {
  res.send([
    {
      productIds: '101',
      price: 100,
    },
    {
      productIds: '102',
      price: 150,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port: ${port}`);
});
