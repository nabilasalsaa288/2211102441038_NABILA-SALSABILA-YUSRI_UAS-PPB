

const express = require('express');
const router = express.Router();
const rankingController = require('../controllers/rankingController');



router.get('/get-ranking',rankingController.getRanking);

module.exports = router;
