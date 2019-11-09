const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require('./routes/routes');
const controller = require('./controller/Controller')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(routes);

// app.get('/users/:userId', controller.getUser)

mongoose.connect(
    "mongodb://Soliheen:Tayyibah143@ds113815.mlab.com:13815/everything", 
{
    useNewUrlParser: true
}).then(result => {
    console.log("connected");
    app.listen(3000);
}).catch(err => {
    console.log(err);
})
