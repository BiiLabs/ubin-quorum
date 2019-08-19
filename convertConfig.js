const fs = require('fs');

var config = JSON.parse(fs.readFileSync('networkNodesInfo.json', 'utf8'));

var nettingConfig = [];

var truffleNetworks = {
  "development": {
    "nodeId": 0,
    "host": "localhost",
    "port": 8545,
    "network_id": "*"
  }
};

var stashNames = {
  "01": "MASREGULATOR",
  "02": "MASGSGSG",
  "03": "BOFASG2X",
  "04": "CHASSGSG",
  "05": "CITISGSG",
  "06": "CSFBSGSX",
  "07": "DBSSSGSG",
  "08": "HSBCSGSG",
  "09": "MTBCSGSG",
  "10": "OCBCSGSG",
  "12": "SCBLSGSG",
  "14": "UOBVSGSG",
  "15": "XSIMSGSG"
};

var truffleNames = {
  "01": "mas",
  "02": "cb",
  "03": "a",
  "04": "b",
  "05": "c",
  "06": "d",
  "07": "e",
  "08": "f",
  "09": "g",
  "10": "h",
  "12": "i",
  "14": "j",
  "15": "k"
};


var counter = 0;

Object.keys(config).forEach(enode => {
  let nodeId = config[enode].nodeName.slice(2, 4);
  let centralBank = false;
  let regulator = false;
  let stashName = stashNames[nodeId];
  if (stashName === "MASGSGSG") centralBank = true;
  if (stashName === "MASREGULATOR") regulator = true;
  let nodeConfig = {
    "nodeId": parseInt(nodeId),
    "host": config[enode].ipAddress,
    "port": "20010",
    "accountNumber": 0,
    "ethKey": config[enode].address,
    "constKey": config[enode].constellationPublicKey,
    "stashName": stashName,
    "enode": enode,
    "centralBank": centralBank,
    "regulator": regulator,
    "localport": 3000
  };
  nettingConfig.push(nodeConfig);

  if (typeof stashName != 'undefined') {
    let truffleName = truffleNames[nodeId];
    let truffleNode = {
      "nodeId": nodeConfig.nodeId,
      "host": nodeConfig.host,
      "port": parseInt(nodeConfig.port),
      "network_id": "*"
    };
    if (regulator) {
      truffleNode["gas"] = 200000000;
    }
    truffleNetworks[truffleName] = truffleNode;
  }

  counter++;

});

nettingConfig.sort((a, b) => {
  return a.nodeId - b.nodeId;
});

function sortTruffle(o) {
  return Object.keys(o).sort((a, b) => {
    return o[a].nodeId - o[b].nodeId;
  }).reduce((r, k) => (r[k] = o[k], r), {});
}

truffleNetworks = sortTruffle(truffleNetworks)

fs.writeFile('test-scripts/config/config.json', JSON.stringify(nettingConfig, null, "    "),
  err => {
    if (err) console.log(err);
  });

var testnet = {
  "nodes": nettingConfig.map(i => i.constKey)
};

fs.writeFile('testnet.json', JSON.stringify(testnet, null, "    "),
  err => {
    if (err) console.log(err);
  });


fs.writeFile('server/config/network.json', JSON.stringify(nettingConfig, null, "    "),
  err => {
    if (err) console.log(err);
  });

fs.writeFile('truffle.js', 'module.exports = ' + JSON.stringify({
    "networks": truffleNetworks
  }, null, "  ").replace(/\"([^"]+)\":/g, "$1:") + ';',
  err => {
    if (err) console.log(err);
  });