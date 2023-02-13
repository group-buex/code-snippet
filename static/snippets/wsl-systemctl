#!/usr/bin/env bash

# wsl 사용시 systemctl 명령어가 먹히지 않을때

sudo -b unshare --pid --fork --mount-proc /lib/systemd/systemd --system-unit=basic.target
sudo -E nsenter --all -t $(pgrep -xo systemd) runuser -P -l $USER -c "exec $SHELL"
