param ($Cmd = $(throw "命令参数为必传参数."))

if ($Cmd -eq "push") {
  $Message = Read-Host "请输入提交信息(`,`分隔多行)"

  if ($Message -eq "") {
    Write-Host "提交信息不能为空" -ForegroundColor Red
    exit 1
  }

  # 2. 将逗号替换为换行符
  $Message = $Message -replace ",", "`n"

  # 提交到 dev 分支, 然后 squash 合并并提交到 main 分支
  git add .
  git commit -m $Message
  git push origin dev
  git checkout main
  git merge --squash dev
  git commit --no-edit
  git merge dev -m "new version"
  git push origin main

  Write-Host $Message
} elseif (($Cmd -eq "pull") -or ($Cmd -eq "publish")) {
  git pull origin main
  pnpm lib:build
  npm publish --registry https://registry.npmjs.org/
  git checkout dev
  git merge main

  Write-Host " "
  Write-Host "publish success" -ForegroundColor Green
}
