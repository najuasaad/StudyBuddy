const router = require('express').Router();
const { SessionMember } = require('../../models');


// need to add enroll in a session and unenroll from a session through session members table
router.post('/', async (req, res) => {
  console.log(req.body)
  if(req.session.member_id) {
    try {
      const sessionMemberData = await SessionMember.create({
        session_id: req.body.session_id,
        member_id: req.session.member_id
      });
      res.status(200).json(sessionMemberData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  else{
    document.location.replace('/login')
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