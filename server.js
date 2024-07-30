const express = require('express');
const router = require('./excel-read-route');

const app = express();

app.get('/',(req,res) => {
  //console.log('Hellow');
  res.send('Welcome')
}),

app.use('/excel', router);

app.listen(3000, () => {
  console.log('App is running on Port 3000');
});
