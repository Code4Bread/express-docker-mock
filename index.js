const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello EBS');
})

app.listen(8080, () => {
    console.log('Server is up and running')
});