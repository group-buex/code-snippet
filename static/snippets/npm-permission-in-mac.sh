# Option 1: 권한을 npm의 default 디렉토리로 변경하기
# 1) npm의 디렉토리가 있는 path 찾기:
npm config get prefix

# 대부분의 시스템들은 /usr/local로 되어있다.
# 경고: 만약 path가 단순히 /usr로 설정되어 있다면, 2)번을 시행하지 말고 Option 2를 시도해 볼 것.
# /usr인 경우에 강제로 권한 설정을 바꾸면 문제를 야기할 수 있다.

# 2) 소유자(owner)의 npm 디렉토리를 current user name으로 된 디렉토리로 바꾸기.
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node\_modules,bin,share}

# Option 2: https://devhealer.tistory.com/27
