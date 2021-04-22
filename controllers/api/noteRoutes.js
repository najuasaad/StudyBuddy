const router = require('express').Router();
const { Members, Notes, Sessions } = require('../../models');

// GET All Notes by user
//!!!!
router.get('/', async (req, res) => {
  try {
    const notesData = await Notes.findAll({include: Members, Sessions});
    res.status(200).json(notesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single note
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
router.post('/', async (req, res) => {
  try {
    const newNoteData = await Notes.create(req.body);
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
        id: req.params.id
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
