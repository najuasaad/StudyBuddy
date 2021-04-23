const router = require('express').Router();
const { Members } = require('../../models');

//Creates User
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const userData = await Members.create(req.body);

    req.session.save(() => {
      req.session.member_id = userData.id;
      req.session.member = userData.display_name;
      req.session.logged_in = true;
      req.session.email = userData.email;
      
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const userData = await Members.findOne({ where: { email: req.body.email } });

    console.log(userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

     const validPassword = await userData.checkPassword(req.body.password);
     
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.member_id = userData.id;
      req.session.member = userData.display_name;
      req.session.logged_in = true;
      req.session.email = userData.email;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
