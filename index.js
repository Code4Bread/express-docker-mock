const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
  .then(() => console.log('Database is connected'))
  .catch((err) => console.log(err.message));

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello EBS');
});

app.listen(8080, () => {
    console.log('Server is up and running')
});
