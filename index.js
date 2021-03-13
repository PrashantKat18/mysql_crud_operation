const express = require('express');
const app = express();
const config = require('./config/config.json');
const database = require('./db_connection/database')
const user = require('./routes/user');
var bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send("hello guys");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(user);
app.listen(`${config.port}`, console.warn("main server is running", `${config.host}${config.port}`));

