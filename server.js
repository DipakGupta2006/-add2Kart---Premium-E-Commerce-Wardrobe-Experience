const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/tnc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tnc.html'));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});