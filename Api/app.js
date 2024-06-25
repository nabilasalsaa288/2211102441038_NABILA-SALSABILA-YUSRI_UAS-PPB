const express = require('express');
const app = express();
const db = require('./models'); 
const cors = require('cors');

app.use(cors());


const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const rankingRoutes = require('./routes/ranking');


app.use(express.json());


app.use('/auth', authRoutes);
app.use('/quiz', quizRoutes);
app.use('/ranking', rankingRoutes);


db.sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
