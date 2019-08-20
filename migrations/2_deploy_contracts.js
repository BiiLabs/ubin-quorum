const fs = require('fs');
var nodes = JSON.parse(fs.readFileSync('../testnet.json', 'utf8'))['nodes'];

var PaymentAgent = artifacts.require("./PaymentAgent.sol")
var SGDz = artifacts.require("./SGDz.sol")

module.exports = function(deployer) {
  deployer.deploy(SGDz);
  deployer.deploy(PaymentAgent, {privateFor: nodes.slice(1)});
};

