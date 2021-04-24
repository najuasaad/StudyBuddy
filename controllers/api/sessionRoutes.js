const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Members, Notes, Sessions, SessionMember } = require('../../models');


// GET All sessions
router.get('/', async (req, res) => {
  try {
    const sessionsData = await Sessions.findAll({include: Members, Notes});
    res.status(200).json(sessionsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET All of a User's Sessions
router.get('/', async (req, res) => {
  try {
    const sessionData = await Sessions.findAll({ where: {member_id: req.body.member_id}},{include: Members});
    res.status(200).json(sessionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single session
router.get('/:id', async (req, res) => {
  try {
    const sessionData = await Sessions.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{include: Members, Notes}]
    });

    if (!sessionData) {
      res.status(404).json({ message: 'No session found with this id!' });
      return;
    }

    res.status(200).json(sessionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a session
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const newSessionData = await Sessions.create({
      ...req.body, 
      host_id: req.session.member_id, 
      host_displayname: req.session.member,
      host_picture: req.session.profilePicture
    });
    res.status(200).json(newSessionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a session
router.delete('/:id', async (req, res) => {
  try {
    const sessionData = await Sessions.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(sessionData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
