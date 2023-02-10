#!/usr/bin/env bash
## INFO: https://docs.docker.com/engine/install/ubuntu/

set -euf -o pipefail

sudo apt-get -y install vi apt-transport-https dirmngr wget software-properties-common && sudo add-apt-repository ppa:cwchien/gradle

# Install dependencies
sudo apt-get update && sudo apt-get install -y gradle

gradle -v
