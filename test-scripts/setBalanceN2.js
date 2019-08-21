const fs = require('fs');
var nodes = JSON.parse(fs.readFileSync('config/config.json', 'utf8'));
var PaymentAgent = artifacts.require("./PaymentAgent.sol");
var u = require('./test-utils.js');
// set initial variables
var bankIdx = process.argv[6];
var bal = process.argv[7];
bal = bal < 1 ? 1 : bal; //balance can't be zero

bankName = nodes[bankIdx].stashName;
let i = u.searchNode(nodes, 'stashName', bankName);
var consKey = nodes[i].constKey;
var txId = null; // Seb added
var n2PubKey = "XsxpJ322FAhiSV8iIaZl5fQc+ebMjUFyaUvlNqV59yA=";

module.exports = (done) => {
  let paymentAgent = null;
  let txId = null;

  PaymentAgent.deployed().then((instance) => {
    paymentAgent = instance;

    console.log("Setting "+bankName+"'s stash balance to " + bal + "...");
    //return paymentAgent.pledge(bankName, bal, {privateFor: [consKey]});
    // Seb: fix for Error: Invalid number of arguments to Solidity function
    let txId = 'R'+Date.now();
    console.log("TxID: "+ txId);    
    return paymentAgent.pledge(txId, bankName, bal, {privateFor: [consKey,n2PubKey]});
  }).then((result) => {
    console.log("\tmined!, block: "+result.receipt.blockNumber+", tx hash: "+result.tx);
    console.log("");
     done();
  }).catch((e) => {
    console.log(e);
    done();
  });
};
