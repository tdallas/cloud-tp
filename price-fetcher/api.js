const axios = require("axios");


// response comes in :
// "data": [{ "id": "AED", "name": "United Arab Emirates Dirham", "min_size": "0.01000000"}}
exports.getSupportedCurrencies = () =>
  axios
    .get("https://api.coinbase.com/v2/currencies")
    .then(({ data }) => data.data)
    .catch((error) => console.log("error", error));

// response comes in : { base: 'BTC', currency: 'USD', amount: '37009.65' }
exports.getBuyPriceOf = ({ baseToken, secondaryToken }) =>
  axios
    .get(
      `https://api.coinbase.com/v2/prices/${baseToken}-${secondaryToken}/buy`
    )
    .then(({ data }) => data.data)
    .catch((error) => console.log("error", error));

// response comes in : { base: 'BTC', currency: 'USD', amount: '37009.65' }
exports.getSellPriceOf = ({ baseToken, secondaryToken }) =>
  axios
    .get(
      `https://api.coinbase.com/v2/prices/${baseToken}-${secondaryToken}/sell`
    )
    .then(({ data }) => data.data)
    .catch((error) => console.log("error", error));

// response comes in : { base: 'BTC', currency: 'USD', amount: '37009.65' }
exports.getSpotPriceOf = ({ baseToken, secondaryToken }) =>
  axios
    .get(
      `https://api.coinbase.com/v2/prices/${baseToken}-${secondaryToken}/spot`
    )
    .then(({ data }) => data.data)
    .catch((error) => console.log("error", error));
