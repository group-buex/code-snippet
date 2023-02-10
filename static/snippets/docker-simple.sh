#!/usr/bin/env bash
## INFO: https://docs.docker.com/engine/install/ubuntu/

set -euf -o pipefail

# Install dependencies
sudo apt-get update && sudo apt-get install -y docker.io
