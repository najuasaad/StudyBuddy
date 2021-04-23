const sequelize = require('../config/connection');
const {Notes,Members,Sessions,SessionMember,Images} = require('../models');

const notesSeedData = require('./notes_seed.json');
const membersSeedData = require('./members_seed.json');
const sessionSeedData = require('./sessions_seed.json');
const sessionMemberSeedData = require('./session_members.json');
const imagesSeedData = require('./images_seed.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Images.bulkCreate(imagesSeedData);

  await Members.bulkCreate(membersSeedData);

  await Notes.bulkCreate(notesSeedData);

  await Sessions.bulkCreate(sessionSeedData);

  await SessionMember.bulkCreate(sessionMemberSeedData)


  process.exit(0);
};

seedDatabase();
