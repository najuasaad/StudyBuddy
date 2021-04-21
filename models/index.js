const Notes= require('./notes');
const Members=require('./members');
const Sessions= require('./sessions');


Members.hasMany(Sessions,{
    foreignKey: 'members_id', 
    onDelete: "cascade"
});

Sessions.hasMany(Members,{
    foreignKey: 'sessions_id', 
    onDelete: "cascade"
});
Notes.belongsTo(Members,{
    foreignKey: 'members_id', 
    onDelete: "cascade"
});
Members.hasMany(Notes,{
    foreignKey: 'members_id', 
    onDelete: "cascade"
});


//If any possible relations add here

module.exports={Notes,Members,Sessions};