const express = require('express');
const exphbs  = require('express-handlebars');
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

var people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 12
  },
  {
    firstName: 'Mark',
    lastName: 'Prin',
    age: 28
  },
  {
    firstName: 'Kevin',
    lastName: 'Ho',
    age: 23
  }
];

app.get('/', function(req, res) {
  res.render('home', {
    content: 'this is home content',
    show: true,
    people: people
  });
});

app.listen(app.get('port'), function(){
  console.log('Server started on port ' + app.get('port'));
});
