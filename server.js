const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// Import the custom helper methods
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods
// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create({});

// Set up sessions
const sess = {
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(require('./controllers/'));
  app.listen(PORT, () => console.log('Now listening'));
});
