const paramsService = require('../services/paramsService');

exports.getParams = async (req, res) => {
  try {
    const { token, chain } = req.body;
    const params = await paramsService.getParams(token, chain);
    res.json(params);
  } catch (error) {
    console.error('Error fetching transaction parameters:', error);
    res.status(500).json({ error: 'Error fetching transaction parameters' });
  }
};