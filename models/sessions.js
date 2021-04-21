//sessions.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sessions extends Model {}

Sessions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    host_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  
    },
    session_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    max_occupancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    members_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'members',
            key: 'id'
          }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sessions',
  }
);

module.exports = Sessions;