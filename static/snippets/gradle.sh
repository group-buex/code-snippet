#!/usr/bin/env bash
## INFO: https://docs.docker.com/engine/install/ubuntu/

set -euf -o pipefail

VERSION=7.1.1

wget https://services.gradle.org/distributions/gradle-${VERSION}-bin.zip -P /tmp

sudo unzip -d /opt/gradle /tmp/gradle-${VERSION}-bin.zip && sudo ln -s /opt/gradle/gradle-${VERSION} /opt/gradle/latest

cat > /etc/profile.d/gradle.sh export GRADLE_HOME=/opt/gradle/latest
export PATH=${GRADLE_HOME}/bin:${PATH}

# 터미널에서 gradle 입력시 위에 설치한 버전으로 연결
# Set Sxecutable Permission
sudo chmod +x /etc/profile.d/gradle.sh
# Script Loading
source /etc/profile.d/gradle.sh

gradle -v
