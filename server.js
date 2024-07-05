const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const tokens = [
  { id: 'token1', name: 'Token 1' },
  { id: 'token2', name: 'Token 2' },
  { id: 'token3', name: 'Token 3' },
];

const quotes = {
    'token1-ethereum': {
      amount: '1.23',
      rate: '0.0001',
      fee: '0.01',
      connection: 'direct',
    },
    'token1-polygon': {
      amount: '1.45',
      rate: '0.0002',
      fee: '0.02',
      connection: 'bridge',
    },
    'token1-binance': {
      amount: '1.67',
      rate: '0.0003',
      fee: '0.03',
      connection: 'direct',
    },
    'token2-ethereum': {
      amount: '2.23',
      rate: '0.0004',
      fee: '0.04',
      connection: 'bridge',
    },
    'token2-polygon': {
      amount: '2.34',
      rate: '0.0002',
      fee: '0.02',
      connection: 'direct',
    },
    'token2-binance': {
      amount: '2.45',
      rate: '0.0005',
      fee: '0.05',
      connection: 'bridge',
    },
    'token3-ethereum': {
      amount: '3.23',
      rate: '0.0006',
      fee: '0.06',
      connection: 'direct',
    },
    'token3-polygon': {
      amount: '3.34',
      rate: '0.0007',
      fee: '0.07',
      connection: 'bridge',
    },
    'token3-binance': {
      amount: '3.45',
      rate: '0.0003',
      fee: '0.03',
      connection: 'direct',
    },
  };
  
  const params = {
    'token1-ethereum': {
      to: '0x1234567890123456789012345678901234567890',
      value: '1.23',
      gas: '21000',
      gasPrice: '10000000000',
      connection: 'direct',
    },
    'token1-polygon': {
      to: '0x0987654321098765432109876543210987654321',
      value: '1.45',
      gas: '30000',
      gasPrice: '20000000000',
      connection: 'bridge',
    },
    'token1-binance': {
      to: '0x9876543210987654321098765432109876543210',
      value: '1.67',
      gas: '40000',
      gasPrice: '30000000000',
      connection: 'direct',
    },
    'token2-ethereum': {
      to: '0x1234567890123456789012345678901234567890',
      value: '2.23',
      gas: '21000',
      gasPrice: '10000000000',
      connection: 'bridge',
    },
    'token2-polygon': {
      to: '0x0987654321098765432109876543210987654321',
      value: '2.34',
      gas: '30000',
      gasPrice: '20000000000',
      connection: 'direct',
    },
    'token2-binance': {
      to: '0x9876543210987654321098765432109876543210',
      value: '2.45',
      gas: '40000',
      gasPrice: '30000000000',
      connection: 'bridge',
    },
    'token3-ethereum': {
      to: '0x1234567890123456789012345678901234567890',
      value: '3.23',
      gas: '21000',
      gasPrice: '10000000000',
      connection: 'direct',
    },
    'token3-polygon': {
      to: '0x0987654321098765432109876543210987654321',
      value: '3.34',
      gas: '30000',
      gasPrice: '20000000000',
      connection: 'bridge',
    },
    'token3-binance': {
      to: '0x9876543210987654321098765432109876543210',
      value: '3.45',
      gas: '40000',
      gasPrice: '30000000000',
      connection: 'direct',
    },
  };

app.get('/tokens', (req, res) => {
  res.json(tokens);
});

app.post('/quotes', (req, res) => {
  const { token, chain } = req.body;
  const key = `${token}-${chain}`;
  const quote = quotes[key] || null;
  res.json(quote);
});

app.post('/params', (req, res) => {
    const { token, chain } = req.body;
    const key = `${token}-${chain}`;
    const transactionParams = params[key] || null;
    res.json(transactionParams);
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});