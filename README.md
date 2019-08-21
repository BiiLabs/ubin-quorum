# Project Ubin Phase 2 - Quorum
This repository contains the source code and test scripts for the Quorum prototype in Project Ubin Phase 2.

Ubin Phase 2 is a collaborative design and rapid prototyping project, exploring the use of Distributed Ledger Technologies (DLT) for Real-Time Gross Settlement. 
* Read the **Project Ubin Phase 2 Report** [here](http://bit.ly/ubin2017rpt).
* For more detailed documentation, refer to the Technical Reports: [Overview](https://github.com/project-ubin/ubin-docs/blob/master/UbinPhase2-Overview.pdf), [Quorum](https://github.com/project-ubin/ubin-docs/blob/master/UbinPhase2-Quorum.pdf) and [Testing](https://github.com/project-ubin/ubin-docs/blob/master/UbinPhase2-Testing.pdf).

The Quorum smart contract code is written in Solidity and the API layer is written in JavaScript.

Additional notes:
* An external service (mock RTGS service) is to be deployed for Pledge and Redeem functions. It can be found in the [`ubin-ext-service`](https://github.com/project-ubin/ubin-ext-service)
* A common UI can be found in the [`ubin-ui`](https://github.com/project-ubin/ubin-ui) repository.

# Quorum Network Setup

## Install Pre-requisites

1\.	Provision 14 Ubuntu (Xenial - LTS 16.04) VMs (11 banks, 1 MAS central bank, 1 MAS Regulatory Node, 1 deployment, 16GB, 2 cores)

**You must ensure the OS version is Ubuntu 16.04 LTS**
```sh
$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 16.04.3 LTS
Release:        16.04
Codename:       xenial
```

2\. Node v8.x.x is installed for all the VMs
```sh
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt install -y nodejs
```

3\. Npm v5.x.x is installed for all the VMs
npm version 5 should already be installed by above step.
```sh
$ npm -v
5.6.0
```

4\. Java 8 installed in Central Bank VM
Run commands to update system package index and install OpenJDK:
```sh
$ sudo apt update
$ sudo apt install -y default-jre
$ sudo apt install -y default-jdk
```
Check the Java version after installing the package, run command:
```sh
$ javac -version
javac 1.8.0_222

$ java -version
jopenjdk version "1.8.0_222"
OpenJDK Runtime Environment (build 1.8.0_222-8u222-b10-1ubuntu1~16.04.1-b10)
OpenJDK 64-Bit Server VM (build 25.222-b10, mixed mode)
```

5\.	Screen is installed
screen allows you to keep screen active while switching between your command line programs.
```sh
$ sudo apt install screen
```

6\.	Confirm these ports are opened in the firewall rules
```
raft-http                           TCP 40000
geth-communicationNode              TCP 50000
geth-node                           TCP 20000
DEVp2p                              TCP 30301
constellation-network               TCP 9000
rpc                                 TCP 20010
API                                 TCP 3000
```
You can check out with ['ufw'](https://wiki.ubuntu.com/UncomplicatedFirewall)


7\. SSH into the VM
Tip: Merge your pub key into the ~/.ssh/authorized_keys for seamless login

FYI: https://blog.gtwang.org/linux/linux-ssh-public-key-authentication/

8\. Clone the installation setups/binaries from git repo 
https://github.com/project-ubin/ubin-quorum-setup.git, 
```sh
$ git clone https://github.com/project-ubin/ubin-quorum-setup.git
```
your directory structure should look like this
```sh
$ cd ~/ubin-quorum-setup
$ ls
binaries
```

9\. End any running instances of Geth and constellation instances on all the VMs

```sh
$ cd ~/ubin-quorum-setup/binaries/setup
$ ./cleanup_process.sh
```

10\. Install core prerequisites

```sh
$ cd ~/ubin-quorum-setup/binaries/setup
# Important! there is a space between the two periods

$ . ./setup_full.sh 
```

11\. Confirm installation

```sh
$ ls ubin-quorum-setup/binaries
constellation	geth
quorum-genesis	QuorumNetworkManager
setup         	
```
It is recommended to **backup your VM** as regular snapshots before each subsequent sections. 

# License 
 
Copyright 2017 The Association of Banks in Singapore
 
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
