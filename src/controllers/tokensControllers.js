const tokensService = require('../services/tokensService');

exports.getTokens = (req, res) => {
    const blockchain = req.query.blockchain;
    const tokens = [
      { id: '1', symbol: 'BTC', name: 'Bitcoin' },
      { id: '2', symbol: 'ETH', name: 'Ethereum' },
      { id: '3', symbol: 'USDC', name: 'USD Coin' },
    ];
    res.json({ tokens });
  };