const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', function(req, res){
  res.render('todo-home')
});

// app.get('/add', (req, res) => {
//   res.render('todo-add')
// });

const taskRoutes = require('./routes/tasks-routes');
app.use('/tasks', taskRoutes);

// app.get('/', (req, res) => {
//   res.render('to-do home', {message: 'Hello world!'});
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));

const port = 3000;
app.listen(port,() => {
  console.log(`listening on port ${port}`);
})


