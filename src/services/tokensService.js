const axios = require('axios');
const config = require('../constants/config');

exports.getTokens = async () => {
  try {
    const response = await axios.get(`${config.XY_FINANCE_API_URL}/tokens`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tokens from XY Finance API:', error);
    throw new Error('Error fetching tokens from XY Finance API');
  }
};