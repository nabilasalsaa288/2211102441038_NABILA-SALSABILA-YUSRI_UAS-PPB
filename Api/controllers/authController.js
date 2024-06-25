

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');


exports.register = async (req, res) => {
  try {
    const { nama, umur, alamat, nomorhp, password, username } = req.body;


    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(409).json({ message: 'Username sudah digunakan. Silakan pilih username lain.' });
    }

   
    const existingUser = await User.findOne({ where: { nama } });
    if (existingUser) {
      return res.status(409).json({ message: 'Nama sudah digunakan. Silakan pilih nama lain.' });
    }


    if (username.includes(' ')) {
      return res.status(400).json({ message: 'Username tidak boleh mengandung spasi.' });
    }

 
    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await User.create({
      nama,
      umur,
      alamat,
      nomorhp,
      username,
      password: hashedPassword
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat registrasi pengguna.' });
  }
};


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body; 
    const user = await User.findOne({ where: { username } }); 

    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Kombinasi username dan password salah.' });
    }

  
    const token = jwt.sign({ userId: user.id }, 'dsadzvxvfer23432312', { expiresIn: '1h' });

   
    res.json({ 
      token,
      userId: user.id,
     
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan saat login.' });
  }
};