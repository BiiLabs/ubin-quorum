#!/bin/bash

echo "[*] initializing states and initial funds..."
truffle exec --network mas wipeout.js
truffle exec --network mas createStashesDyn.js
truffle exec --network mas setBalance.js 1 100
truffle exec --network mas setBalance.js 2 200
truffle exec --network mas setBalance.js 3 300
truffle exec --network mas setBalance.js 4 400
truffle exec --network mas setBalance.js 5 500
truffle exec --network mas setBalance.js 9 900

echo "[*] starting balances:"
truffle exec --network mas getStashes.js

