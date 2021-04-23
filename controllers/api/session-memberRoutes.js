const router = require('express').Router();
const { SessionMember } = require('../../models');


// need to add enroll in a session and unenroll from a session through session members table
router.post('/', async (req, res) => {
    try {
      const sessionMemberData = await SessionMember.create(req.body);
      es.status(200).json(sessionMemberData);
    } catch (err) {
      res.status(400).json(err);
    }
})
  
  // delete session member
  router.delete('/:id', async (req, res) => {
    try {
      const sessionMemberData = await SessionMember.destroy({
        where: {
          id: req.params.id
        }
      });
  
      res.status(200).json(sessionMemberData)
    } catch (err) {
      res.status(500).json(err);
    }
})

module.exports = router;