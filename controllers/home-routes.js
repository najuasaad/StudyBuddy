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

    console.log(sessions)

    res.render('sessions', {
      sessions,
      logged_in: req.session.logged_in,
      logged_in_member: req.session.username,
      logged_in_id: req.session.id
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

    const notesData = await Notes.findMany({ where: {user : member_id}});

    // STUDY SESSIONS 
    
    const sessionData = await Members.findOne({ where: { id: req.session.member_id} }, 
      {include: [{model: Session, through: SessionMember, as: sessions}]
    })

    const notes = notesData.map((note) =>
      session.get({ plain: true })
    );

    // remember to change handlebars dash page to studysessions
    const studysessions = sessionData.map((session) =>
      session.get({ plain: true })
    );

    res.render('dashboard', notes, studysessions);
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

module.exports = router;
