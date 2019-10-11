const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello E-Com');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
