#!/usr/bin/env bash
## INFO: https://docs.docker.com/compose/install/

set -euf -o pipefail

# 20230208
NODE_VERSION=18

# Download and install
sudo curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v