#!/usr/bin/env bash

yum update -y && yum install -y net-tools

# selinux 비활성화
setenforce 0
sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/' /etc/selinux/config

# swap 비활성화
swapoff -a
sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

# 방화벽 비활성화
systemctl disable firewalld
systemctl stop firewalld

# iptables 커널 설정
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
br_netfilter
EOF

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF

sysctl --system

# hosts 설정 ! 커스텀 필요 !
# hostnamectl set-hostname [HOST NAME]

yum update -y


