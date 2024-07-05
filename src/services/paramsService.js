const axios = require('axios');
const config = require('../constants/config');

exports.getParams = async (token, chain) => {
  try {
    const response = await axios.post(`${config.XY_FINANCE_API_URL}/params`, { token, chain });
    return response.data;
  } catch (error) {
    console.error('Error fetching transaction parameters from XY Finance API:', error);
    throw new Error('Error fetching transaction parameters from XY Finance API');
  }
};