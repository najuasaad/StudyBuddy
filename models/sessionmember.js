const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class SessionMember extends Model {}

SessionMember.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'members',
                key: 'id',
                unique: false,
            }, 
        },
        session_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'sessions',
                key: 'id',
                unique: false,
            }, 
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'session_member',
    }
);

module.exports = SessionMember;