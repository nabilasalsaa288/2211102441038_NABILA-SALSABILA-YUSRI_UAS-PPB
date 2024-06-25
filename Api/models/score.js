

module.exports = (sequelize, DataTypes) => {
    const Score = sequelize.define('Score', {
      jenisQuis: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nilai: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  

    Score.associate = models => {
      Score.belongsTo(models.User); 
    };
  
    return Score;
  };
  