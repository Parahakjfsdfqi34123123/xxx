const oneLine = require('common-tags').oneLine;
const fetch = require("node-fetch")

var name = "bitcoin"

module.exports = {
  config: {
    nombre: "bitcoin",
    alias: []
  },
  run: async (client, message, args) => {

        // BitCoin Charts
        var bitcoin_charts = "http://api.bitcoincharts.com/v1/markets.json"
        fetch(bitcoin_charts)
            .then(res => res.json())
            .then((out) => {
                var bitcoin_info = out;
                //console.log(bitcoin_info);

                var usd_currency = bitcoin_info[0]
                var eur_currency = bitcoin_info[1]

                var bc_to_usd = usd_currency.ask;

                var bc_to_eur = eur_currency.ask;

                var usd_message = "USD --> 1 bitcoin equals: $" + bc_to_usd
                var eur_message = "EUR --> 1 bitcoin equals: €" + bc_to_eur

                message.channel.send({
                    embed: {
                        color: 'GREEN',
                        
                        description: `${usd_message}\n${eur_message}`
                    }
                });
            })
            .catch(err => { throw err });
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
  }
}

/*title: `Bitcoin Data From BitcoinCharts.com`,*/