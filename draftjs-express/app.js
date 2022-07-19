var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');

var app = express();

var indexRouter = require('./routes/index');
var textRouter = require('./routes/textEditor');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/text',textRouter);

module.exports = app;


// PORT
const port = process.env.PORT || 7000

// using database from config
const dbConfig=require('./config/database');
dbConfig();

app.listen(port,()=>{
  console.log("Server is running on port : ",port)
})

