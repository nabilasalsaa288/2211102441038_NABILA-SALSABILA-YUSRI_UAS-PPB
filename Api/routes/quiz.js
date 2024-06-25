

const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const quizController = require('../controllers/quizController');


router.post('/save-score', authenticateToken, quizController.saveScore);

module.exports = router;
