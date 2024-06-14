#!/bin/bash

set -e

# Docker와 Docker Compose 설치를 위한 bash 스크립트

# 업데이트 및 필수 패키지 설치
echo "Updating package information and installing dependencies..."
sudo apt-get update -y ||true
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Docker GPG 키 추가
echo "Adding Docker's official GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Docker 저장소 추가
echo "Setting up the Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  jammy stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Docker 엔진 설치
echo "Installing Docker Engine..."
sudo apt-get update -y || true
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Docker Compose 설치
echo "Installing Docker Compose..."
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
sudo curl -L "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Docker 서비스 시작 및 활성화
echo "Starting and enabling Docker..."
sudo systemctl start docker
sudo systemctl enable docker

# 사용자를 docker 그룹에 추가 (필요할 경우)
echo "Adding user to the docker group..."
sudo usermod -aG docker $USER

# 설치 버전 확인
echo "Docker and Docker Compose installation completed!"
docker --version
docker-compose --version

echo "Installation complete. You might need to log out and log back in for group changes to take effect."
