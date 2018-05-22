const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {router} = require('./router')

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api',router);

app.use(express.static(path.join(__dirname, '../static/dist')));

app.listen(PORT, (err) => {
    if(err) console.log('error starting up server');
    else console.log('successfully connected to server');
});