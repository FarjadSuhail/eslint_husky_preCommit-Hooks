const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    console.log(err);
  });

//    let     x =        6;
// console.log(x);