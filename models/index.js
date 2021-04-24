const Notes= require('./notes');
const Members=require('./members');
const Sessions= require('./sessions');
const SessionMember = require('./sessionmember')

Members.belongsToMany(Sessions,{
    through: {
        model: 'session_member',
        unique: false,
        foreignKey: 'session_id'
    }
});

Sessions.belongsToMany(Members,{
    through: {
        model: 'session_member',
        unique: false,
        foreignKey: 'member_id'
    }
});

Sessions.belongsTo(Members,{
        foreignKey: 'host_id',
        as: 'host'
});

Members.hasMany(Sessions,{
    foreignKey: 'host_id',
    as: 'host',
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

module.exports={Notes,Members,Sessions,SessionMember};