const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Members, Sessions, Notes, SessionMember } = require('../models');

// Home Page Render (sessions page)
router.get('/', async (req, res) => {
  try {
    const sessionData = await Sessions.findAll({
      include: [ {  model: Members, through: SessionMember, as: "members" } ]
    });

    const sessions = sessionData.map((session) =>
      session.get({ plain: true })
    );

    res.render('sessions', {
      sessions,
      logged_in: req.session.logged_in,
      logged_in_member: req.session.member,
      logged_in_id: req.session.member_id
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// dash lists session user's notes and upcoming study sessions
router.get('/dashboard', async (req, res) => {
  try {
    const user = req.session.member_id

    // NOTES instead of findOne, findMany where member_id = req.session.member_id

    const notesData = await Notes.findAll({ where: { member_id : req.session.member_id }});

    // STUDY SESSIONS 
    
    const membersData = await Members.findOne({ where: { id: req.session.member_id } }, 
      {include: [{model: Sessions, through: SessionMember, as: "sessions"}]
    })

    const notes = notesData.map((note) =>
      note.get({ plain: true })
    );

    res.render('dashboard', {
      notes, 
      membersData,
      logged_in: req.session.logged_in,
      logged_in_member: req.session.member,
      logged_in_id: req.session.member_id
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

// Sign up
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Map route under construction .handlebars will be created soon by KL.
router.get('/map', async (req, res) => {
  try {
    res.render('map');
     } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/addnote', async (req, res) => {
  try {
    res.render('addnote');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/addsession', async (req, res) => {
  try {
    res.render('addsession');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
