//notes.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Notes extends Model {}

Notes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    notes_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },   
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'member',
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
    modelName: 'notes',
  }
);

module.exports = Notes;
