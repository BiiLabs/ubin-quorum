const fs = require('fs');
var nodes = JSON.parse(fs.readFileSync('../testnet.json', 'utf8'))['nodes'];

var PaymentAgent = artifacts.require("./PaymentAgent.sol")
var SGDz = artifacts.require("./SGDz.sol")

var PaymentSeb = artifacts.require("./PaymentSeb.sol")
var PaymentEmulator = artifacts.require("./PaymentEmulator.sol")

module.exports = function(deployer) {
  deployer.deploy(SGDz);
  deployer.deploy(PaymentAgent, {privateFor: nodes.slice(1)});

  deployer.deploy(PaymentSeb, {privateFor: nodes.slice(1)});
  deployer.deploy(PaymentEmulator, {privateFor: nodes.slice(1)});
};

