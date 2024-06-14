#!/bin/bash

# 스크립트가 실패하더라도 계속 진행하도록 설정
set +e

# 업데이트 및 필수 패키지 설치
echo "Updating package information and installing dependencies..."
sudo apt-get update -y || true
sudo apt-get install -y \
    curl \
    unzip || true

# 기존 AWS CLI 제거 (필요한 경우)
echo "Removing any existing AWS CLI installations..."
sudo apt-get remove -y awscli || true

# AWS CLI 설치
echo "Downloading AWS CLI..."
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" || true
echo "Unzipping AWS CLI..."
unzip awscliv2.zip || true
echo "Installing AWS CLI..."
sudo ./aws/install || true

# 설치된 AWS CLI 버전 확인
echo "AWS CLI installation completed! Verifying installed version..."
aws --version || echo "AWS CLI installation failed or AWS CLI is not installed."

# 클린업: 다운로드한 압축 파일 제거
echo "Cleaning up installation files..."
rm -rf awscliv2.zip aws/

echo "Installation complete. AWS CLI should now be ready to use."
