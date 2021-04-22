//members.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Members extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Members.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
      }
    },  
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6],
      }
    },  
    display_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },  
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
        type: DataTypes.STRING,               //doubt
        allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'members',
  }
);

module.exports = Members;
