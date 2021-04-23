//members.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
      // validate: {
      //   isEmail: true,
      // }
    },  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [6],
      // }
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
      allowNull: true,
    }, 
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profilePicture: {
      // change to proper datatype, i think it's a string
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    }, 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'members',
  }
);

module.exports = Members;
