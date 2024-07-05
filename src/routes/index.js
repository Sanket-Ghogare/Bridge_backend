const express = require('express');
const router = express.Router();

const tokensController = require('../controllers/tokensControllers');
const quotesController = require('../controllers/quotesController');
const paramsController = require('../controllers/paramsController');

router.get('/tokens', tokensController.getTokens);
router.post('/quotes', quotesController.getQuote);
router.post('/params', paramsController.getParams);

module.exports = router;