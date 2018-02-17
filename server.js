const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('./app/models/user-model');
const Group = require('./app/models/group-model');
const Element = require('./app/models/element-model');
const Experiment = require('./app/models/experiment-model');

//mongoose instance connection url 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lab_class');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./app/routes/api-routes');
routes(app);

app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' NOT FOUND!'});
});

app.listen(port);
console.log('api running in localhost port: ' + port);
