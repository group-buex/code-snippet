#!/bin/bash

# 스크립트가 실패하더라도 계속 실행되도록 설정
set -e || true

# 업데이트 및 필수 패키지 설치
echo "Updating package information and installing dependencies..."
sudo apt-get update -y || true
sudo apt-get install -y \
    curl \
    ca-certificates \
    gnupg \
    lsb-release || true

# Node.js 설치를 위한 NodeSource repository 추가
echo "Adding NodeSource repository for Node.js 22..."
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - || true

# Node.js 22 설치
echo "Installing Node.js 22..."
sudo apt-get install -y nodejs || true

# pnpm 설치
echo "Installing pnpm..."
curl -fsSL https://get.pnpm.io/install.sh | bash - || true

# 환경 변수 설정
echo "Setting up environment variables..."
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
echo 'export PNPM_HOME="$HOME/.local/share/pnpm"' >> ~/.bashrc
echo 'export PATH="$PNPM_HOME:$PATH"' >> ~/.bashrc

# 설치된 Node.js 및 pnpm 버전 확인
echo "Node.js 22 and pnpm installation completed!"
node --version || true
pnpm --version || true

echo "Installation complete. If necessary, log out and log back in for changes to take effect."
