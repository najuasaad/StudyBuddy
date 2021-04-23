const router = require('express').Router();
const { Members, Notes, Sessions } = require('../../models');

// NS-Working to populate "my notes" section on /dashboard-FRIDAY
router.get('/', async (req, res) => {
  try {
    const notesData = await Notes.findAll({ where: {member_id: req.body.member_id}},{include: Members, Sessions});
    res.status(200).json(notesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single note 
// do we need this?
router.get('/:id', async (req, res) => {
  try {
    const noteData = await Notes.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{include: Members, Sessions}]
    });

    if (!noteData) {
      res.status(404).json({ message: 'No note found with this id!' });
      return;
    }

    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a note
// NS- working to create new note- FRIDAY
router.post('/', async (req, res) => {
  try {
    const newNoteData = await Notes.create({...req.body, member_id: req.session.member_id});
    res.status(200).json(newNoteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a note
router.delete('/:id', async (req, res) => {
  try {
    const noteData = await Notes.destroy({
      where: {
        id: project.id,
      }
    });

    if (!noteData) {
      res.status(404).json({ message: 'No note found with this id!' });
      return;
    }

    res.status(200).json(noteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
