

const { Score } = require('../models');


exports.saveScore = async (req, res) => {
  try {
    const { userId, nilai, jenisQuis } = req.body;

   
    const validJenisQuis = ['Matematika', 'English', 'Science'];
    if (!validJenisQuis.includes(jenisQuis)) {
      return res.status(400).json({ message: 'Jenis quis tidak valid. Jenis quis harus salah satu dari: Matematika, English, Science.' });
    }

   
    const newScore = await Score.create({
      UserId: userId,
      nilai,
      jenisQuis
    });

    res.status(201).json(newScore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan skor.' });
  }
}