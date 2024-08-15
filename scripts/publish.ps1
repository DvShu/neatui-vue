param ($Cmd = $(throw "Command parameter is required."))

if ($Cmd -eq "push") {
  Write-Host "push..."
} elseif (($Cmd -eq "pull") -or ($Cmd -eq "publish")) {
  git pull origin main
  pnpm lib:build
  npm publish --registry https://registry.npmjs.org/
  git checkout dev
  git merge main

  Write-Host " "
}
