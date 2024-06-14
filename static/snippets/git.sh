#!/bin/bash

# 스크립트가 실패하더라도 계속 진행하도록 설정
set +e

# 업데이트 및 필수 패키지 설치
echo "Updating package information and installing dependencies..."
sudo apt-get update -y || true
sudo apt-get install -y \
    software-properties-common \
    curl || true

# Git 설치
echo "Installing Git..."
sudo apt-get install -y git || true

# 설치된 Git 버전 확인
echo "Git installation completed! Verifying installed version..."
git --version || echo "Git installation failed or Git is not installed."

echo "Installation complete."
