const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Your API works!');
})

app.listen(8000, console.log('Server is running on PORT 8000'));