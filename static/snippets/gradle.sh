#!/usr/bin/env bash
## INFO: https://docs.docker.com/engine/install/ubuntu/

set -euf -o pipefail

# ppa 저장소 추가
sudo apt-get -y install vi apt-transport-https dirmngr wget software-properties-common && sudo add-apt-repository ppa:cwchien/gradle

# Install dependencies & gradle 7이상 버전으로 설치
sudo apt-get update && sudo apt-get install -y gradle

gradle -v
