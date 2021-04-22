const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Members, Sessions, Notes, SessionMember } = require('../models');

// Home Page Render
router.get('/', async (req, res) => {
  try {
    const sessionData = await Sessions.findAll({
      include: [ {  model: Members, through: SessionMember, as: "members" } ]
    });

    const sessions = sessionData.map((session) =>
      session.get({ plain: true })
    );

    console.log(sessions)

    res.render('sessions', {
      sessions,
      logged_in: req.session.logged_in,
      logged_in_user: req.session.username
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login Page Render
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username_id: req.session.user_id} }, 
      {include: [ {model: Post, Comment} ]
    })

    res.render('dashboard',
    );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
