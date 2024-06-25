

const { User, Score, Sequelize } = require('../models');


exports.getRanking = async (req, res) => {
  try {
    const rankings = await Score.findAll({
      attributes: [
        'UserId',
        [Sequelize.fn('SUM', Sequelize.col('nilai')), 'totalScore']
      ],
      include: [
        {
          model: User,
          attributes: ['nama']
        }
      ],
      group: ['UserId'],
      order: [[Sequelize.literal('totalScore'), 'DESC']]
    });
    res.json(rankings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mendapatkan peringkat.' });
  }
};
