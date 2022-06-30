// https://eth-goerli.alchemyapi.io/v2/a1syTrmlFZ1o5WhZeizJTkfAkZXtvzuc

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/a1syTrmlFZ1o5WhZeizJTkfAkZXtvzuc',
      accounts: ['1cf901d3be4770a459e0071315c853bd57920709848e456c0b82e1498b37e4f4']
    }
  }
}