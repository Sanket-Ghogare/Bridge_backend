// const axios = require('axios');
// const { XY_FINANCE_API_URL } = require('../constants/config');

// exports.getQuote = async (token, chain) => {
//   try {
//     const response = await axios.post(`${XY_FINANCE_API_URL}/quotes`, { token, chain });
//     return response.data;
//   } catch (error) {
//     throw new Error('Error fetching quote from XY Finance API');
//   }
// };

const axios = require('axios');
const config = require('../constants/config');

exports.getQuote = async (token, chain) => {
  try {
    const response = await axios.post(`${config.XY_FINANCE_API_URL}/quotes`, { token, chain });
    return response.data;
  } catch (error) {
    console.error('Error fetching quote from XY Finance API:', error);
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      throw new Error(`Error fetching quote from XY Finance API: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
      // The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
      console.error('No response received from XY Finance API');
      throw new Error('Error fetching quote from XY Finance API: No response received');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error setting up request to XY Finance API:', error.message);
      throw new Error(`Error fetching quote from XY Finance API: ${error.message}`);
    }
  }
};