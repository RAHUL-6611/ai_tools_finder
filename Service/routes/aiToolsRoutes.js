const express = require('express');
const { getAllAITools } = require('../controllers/aiTools');
const router = express.Router();

router.get('/getAllAiTools', getAllAITools);

module.exports = router;