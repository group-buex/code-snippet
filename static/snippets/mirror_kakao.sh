#!/bin/bash

# 현재 시스템의 시간대를 출력
echo "Current Timezone: $(cat /etc/timezone)"

sudo timedatectl set-timezone "Asia/Seoul"
echo "Timezone has been updated to: Asia/Seoul"

# 사용자에게 확인을 요청
# read -p "Do you want to set the timezone to Asia/Seoul? (y/n): " "y"

# if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
#     # 시간대 설정
#     sudo timedatectl set-timezone "Asia/Seoul"
#     echo "Timezone has been updated to: Asia/Seoul"
# else
#     echo "Timezone change cancelled."
#     exit 1
# fi


# 미러 서버 변경을 위한 bash 스크립트

# 업데이트 전에 백업 생성
echo "Backing up current sources.list..."
sudo cp /etc/apt/sources.list /etc/apt/sources.list.backup

# Ubuntu 배포 버전 가져오기
DISTRO=$(lsb_release -cs)

# sources.list 파일 업데이트
echo "Updating sources.list to use Kakao mirror server..."
sudo tee /etc/apt/sources.list > /dev/null <<EOL
deb http://mirror.kakao.com/ubuntu/ $DISTRO main restricted universe multiverse
deb-src http://mirror.kakao.com/ubuntu/ $DISTRO main restricted universe multiverse

deb http://mirror.kakao.com/ubuntu/ $DISTRO-updates main restricted universe multiverse
deb-src http://mirror.kakao.com/ubuntu/ $DISTRO-updates main restricted universe multiverse

deb http://mirror.kakao.com/ubuntu/ $DISTRO-backports main restricted universe multiverse
deb-src http://mirror.kakao.com/ubuntu/ $DISTRO-backports main restricted universe multiverse

deb http://mirror.kakao.com/ubuntu/ $DISTRO-security main restricted universe multiverse
deb-src http://mirror.kakao.com/ubuntu/ $DISTRO-security main restricted universe multiverse
EOL

# 업데이트 패키지 정보
echo "Updating package information..."
sudo apt-get update -y

echo "The sources.list has been updated to use the Kakao mirror server."
