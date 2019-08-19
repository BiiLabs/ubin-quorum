module.exports = {
  networks: {
    development: {
      nodeId: 0,
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    mas: {
      nodeId: 1,
      host: "n1",
      port: 20010,
      network_id: "*",
      from: "0x2b7e9dddfacc60a4e6ec73991b826e18054735e3",
      gas: 200000000,
      gasPrice: 0
    },
    cb: {
      nodeId: 2,
      host: "n2",
      port: 20010,
      network_id: "*",
      from: "0x62c6f83052ccfeed37594e18e77c85f962e4beb4",
      gas: 200000000
    },
    a: {
      nodeId: 3,
      host: "n3",
      port: 20010,
      network_id: "*"
    },
    b: {
      nodeId: 4,
      host: "n4",
      port: 20010,
      network_id: "*"
    },
    c: {
      nodeId: 5,
      host: "n5",
      port: 20010,
      network_id: "*"
    },
    d: {
      nodeId: 6,
      host: "n6",
      port: 20010,
      network_id: "*"
    },
    e: {
      nodeId: 7,
      host: "n7",
      port: 20010,
      network_id: "*"
    },
    f: {
      nodeId: 8,
      host: "n8",
      port: 20010,
      network_id: "*"
    },
    g: {
      nodeId: 9,
      host: "n9",
      port: 20010,
      network_id: "*"
    },
    h: {
      nodeId: 10,
      host: "n10",
      port: 20010,
      network_id: "*"
    },
    i: {
      nodeId: 12,
      host: "n12",
      port: 20010,
      network_id: "*"
    },
    j: {
      nodeId: 13,
      host: "n13",
      port: 20010,
      network_id: "*"
    },
    k: {
      nodeId: 14,
      host: "n14",
      port: 20010,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.4.11",
    },
  },
};
