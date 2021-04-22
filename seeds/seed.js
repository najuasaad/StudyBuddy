const sequelize = require('../config/connection');
const {Notes,Members,Sessions,SessionMember} = require('../models');

const notesSeedData = require('./notes_seed.json');
const membersSeedData = require('./members_seed.json');
const sessionSeedData = require('./sessions_seed.json');
const sessionMemberSeedData = require('./session_members.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Notes.bulkCreate(notesSeedData);

  await Members.bulkCreate(membersSeedData);

  await Sessions.bulkCreate(sessionSeedData);

  await SessionMember.bulkCreate(sessionMemberSeedData)

  process.exit(0);
};

seedDatabase();
