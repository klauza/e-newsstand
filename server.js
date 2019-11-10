var express = require('express');
const connectDB = require('./config/db');
var path = require('path');
var cookieParser = require('cookie-parser');
const helmet = require('helmet');

// /
var indexRouter = require('./routes/index');
// /shop/item
var shopRouter = require('./routes/shop');
// /admin/login
var loginRouter = require('./routes/login');

var app = express();
app.use(helmet());

connectDB();  // connect to database


// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use('/api', indexRouter);
app.use('/api/shop', shopRouter);

app.use('/api/admin/login', loginRouter);
app.use('/api/admin/auth', require('./routes/auth'));


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.use('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));