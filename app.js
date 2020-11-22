'use strict';
var express = require('express');
var path = require('path');
var app = express();
const handlebars = require('express-handlebars');


app.set('port', process.env.PORT || 3000);
// Statics
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
  defaultLayout:'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  registerPartial: [path.join(app.get('views'), 'partials'), path.join(app.get('views'), 'partials/grammar'), path.join(app.get('views'), 'partials/topic')],
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(require('./routes/index'));

app.listen(app.get('port'), function () {
  console.log(app.get('port'));
});
