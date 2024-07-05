const quotesService = require('../services/quotesService');

exports.getQuote = async (req, res) => {
  try {
    const { token, chain } = req.body;
    const quote = await quotesService.getQuote(token, chain);
    res.json(quote);
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ error: error.message });
  }
};