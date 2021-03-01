const path = require('path');
var HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
  networks: {
    develop: {
      port: 8545,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          MNENOMIC,
          'https://ropsten.infura.io/v3/' + INFURA_API_KEY
        ),
      network_id: 3,
      gas: 4612388,
    },
  },
};
