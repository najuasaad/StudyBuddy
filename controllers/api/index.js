const router = require('express').Router();

const memberRoutes = require('./memberRoutes.js');
const noteRoutes = require('./noteRoutes.js');
const sessionRoutes = require('./sessionRoutes.js');

router.use('/members', memberRoutes);
router.use('/notes', noteRoutes);
router.use('/sessions', sessionRoutes);

module.exports = router;