import express from 'express';

import finnhub from 'finnhub';

const router = express.Router();
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
const finnhubClient = new finnhub.DefaultApi()

router.get(`/searchbar`, async (req, res) => {
  res.json([]);
})

router.get('/searchbar/:query', async (req, res) => {
  const query = req.params.query;
  api_key.apiKey = process.env.FINNHUB_KEY;
  finnhubClient.symbolSearch(query, (error, data, response) => {
    return res.json(data.result);
  });
});

router.get('/:symbol/profile', async (req, res) => {
  const symbol = req.params.symbol;
  api_key.apiKey = process.env.FINNHUB_KEY;
  finnhubClient.companyProfile2({'symbol': symbol}, (error, data, response) => {
    return res.json(data);
  });
});

router.get('/:symbol/candles', async (req, res) => {
  const symbol = req.params.symbol;
  api_key.apiKey = process.env.FINNHUB_KEY;
  const date = new Date();
  date.setMonth(date.getMonth()-12)
  const yearago = Math.floor(date.getTime() / 1000)
  const now = Math.floor(Date.now()/ 1000)
  finnhubClient.stockCandles(symbol, "D", yearago, now, {}, (error, data, response) => {
    return res.json(data);
  });
});

router.get('/:symbol/financials', async (req, res) => {
  const symbol = req.params.symbol;
  api_key.apiKey = process.env.FINNHUB_KEY;
  finnhubClient.companyBasicFinancials(symbol, "all", (error, data, response) => {
    return res.json(data.metric);
  });
});

router.get('/:symbol/quote', async (req, res) => {
  const symbol = req.params.symbol;
  api_key.apiKey = process.env.FINNHUB_KEY;
  finnhubClient.quote(symbol, (error, data, response) => {
    return res.json(data);
  });
});


export default router;

// const symbolLookup = `https://finnhub.io/api/v1/search?q=${symbol}&token=${API_key}`
//     const quoteLookup = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_key}`
//     const basicLookup = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${API_key}`
//     const profileLookup = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_key}`
//     const earningLookup = `https://finnhub.io/api/v1/calendar/earnings?from=2021-07-21&to=2021-08-01&symbol=${symbol}&token=${API_key}`

    // name //////////////////////////company profile
    // Logo
    // market capitalization
    // shares outstanding
    // 52 week high/low      ////////////basic financials
    // average daily trading volume


//name logo
// last price                                   marketcap
// price change %                       outstanding shares
// 52week high                            avg daily volume
// 52week low                              earnings date
