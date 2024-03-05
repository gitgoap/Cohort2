const express = require('express');
const app = express();
const port = 6200;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(8080);

