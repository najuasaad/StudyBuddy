const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

// Import the custom helper methods
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods
const hbs = exphbs.create({ 
  helpers: {
    format_date: helpers.format_date,
    format_time: helpers.format_time
  }
});

// Set up sessions
const sess = {
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(routes);

console.log('this is', {helpers})

sequelize.sync({ force: false }).then(() => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(require('./controllers/'));
  app.listen(PORT, () => console.log('Now listening'));
});
