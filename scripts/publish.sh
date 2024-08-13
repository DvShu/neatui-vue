#!/bin/bash

GREEN='\033[1;32m'
RESET='\033[0m'  # 重置颜色

# 检查是否提供了至少一个参数
if [ $# -eq 0 ]; then
  echo "请提供至少一个参数!"
  exit 1
fi

if [ "$1" = "push" ]; then
  # 提示输入提交信息
  echo "请输入提交信息（输入空行、'END'、'exit' 或 'bye' 结束输入）："

  # 初始化一个空字符串来存储提交信息
  commit_message=""

  # 读取用户输入直到输入 'END'
  while IFS= read -r line; do
    if [ "$line" = "END" ] || [ "$line" = "END" ] || [ "$line" = "exit" ] || [ "$line" = "bye" ]; then
      break
    fi
    # 将读取的行添加到提交信息中，使用换行符分隔
    commit_message+="$line"$'\n'
  done

  # 检查提交信息是否为空
  if [ -z "$commit_message" ]; then
      echo "提交信息不能为空。"
      exit 1
  fi

  # 提交到 dev 分支, 然后 squash 合并并提交到 main 分支
  git add .
  git commit -m "$commit_message"
  git push origin dev
  git checkout main
  git merge --squash dev
  git commit --no-edit
  git merge dev -m "new version"
  git push origin main

  echo " "
  echo -e "${GREEN}push success${RESET}"
elif [ "$1" = "pull" ]; then
  git pull origin main
  pnpm lib:build
  npm publish --registry https://registry.npmjs.org/
  git checkout dev
  git merge main

  echo " "
  echo -e "${GREEN}publish success${RESET}"
fi
