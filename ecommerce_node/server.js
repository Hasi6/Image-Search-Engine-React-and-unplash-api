var express = require('express');
var morgon = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');


var User = require('./models/user');

var app = express();

mongoose.connect('mongodb+srv://Hasitha:Freedom6@ecommerce-tmulj.mongodb.net/test?retryWrites=true', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

app.use(morgon('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "Hasitha6@"
}))
app.use(flash());


app.engine('ejs', engine);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

app.use(mainRoutes);
app.use(userRoutes);



app.listen(3200, function(err) {
    if (err) throw err;
    console.log('Server is Running on port 3200');
});