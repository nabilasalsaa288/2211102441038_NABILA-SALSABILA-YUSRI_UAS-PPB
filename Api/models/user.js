

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
      umur: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nomorhp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
          notEmpty: true,
          len: [3, 50] 
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [6, 255] 
        }
      }
    });
  
    return User;
  };
  