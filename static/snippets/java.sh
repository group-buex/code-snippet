#!/usr/bin/env bash

set -euf -o pipefail

# Install dependencies
sudo apt-get update && sudo apt-get install -y default-jdk

java -version
