const { getSupportedCurrencies, getSpotPriceOf } = require("./api.js");

const main = async () => {
  const btcUsdPRice = await getSpotPriceOf({
    baseToken: "BTC",
    secondaryToken: "USD",
  });
  console.log(btcUsdPRice);
};

main();
