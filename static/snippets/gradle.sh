#!/usr/bin/env bash

set -euf -o pipefail

# 20230210
VERSION=7.6

wget https://services.gradle.org/distributions/gradle-${VERSION}-bin.zip -P /tmp

sudo unzip -d /opt/gradle /tmp/gradle-${VERSION}-bin.zip && sudo ln -s /opt/gradle/gradle-${VERSION} /opt/gradle/latest

echo -e "export GRADLE_HOME=/opt/gradle/latest \nexport PATH=${GRADLE_HOME}/bin:${PATH}" | sudo tee /etc/profile.d/gradle.sh

# 터미널에서 gradle 입력시 위에 설치한 버전으로 연결
# Set Sxecutable Permission
sudo chmod +x /etc/profile.d/gradle.sh
# Script Loading
source /etc/profile.d/gradle.sh

gradle -v
