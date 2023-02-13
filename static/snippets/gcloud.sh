#!/usr/bin/env bash

# 필요 요구사항 설치
sudo apt-get install apt-transport-https ca-certificates gnupg

# 패키지 소스 gcloud cli 배포 url 추가 (배포판에서 서명 옵션을 지원하는 경우)
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# 공개키 가져오기 --keyring 인수를 지원하는 경우 사용
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

# gcloud update and install
sudo apt-get update && sudo apt-get install google-cloud-cli

# init
gcloud init
