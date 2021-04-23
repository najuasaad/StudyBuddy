const router = require('express').Router();
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
router.get('/')

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
  try {
    const newSessionData = await Sessions.create(req.body);
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

    if (!sessionData) {
      res.status(404).json({ message: 'No session found with this id!' });
      return;
    }

    res.status(200).json(sessionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
