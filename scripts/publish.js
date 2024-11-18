import { spawn } from 'node:child_process';

/*
  步骤：
    1. 切换到主分支: gi t checkout main
    2. rebase dev -> main: git rebase dev
    3. 获取提交信息: git log --format="%H--%s" -n 10
    4. 修改 changelog、package.json 版本号
    5. 提交: git commit -m "chore: release v1.0.0"
    6. 上传: git push origin main
    7. 构建: pnpm lib:build
    8. 发布: npm publish --registry https://registry.npmjs.org/
    9. 切换回 dev分支: git checkout dev
*/

// 启动一个持久化的 shell 进程
const shell = spawn('powershell.exe', {
  shell: true,
  windowsHide: true,
});

let step = 0;

// 监听输出
shell.stdout.on('data', (data) => {
  switch (step) {
    case 0:
      // 切换到主分支// 切换到主分支成功后, 使用 rebase 合并 dev -> main
      shell.stdin.write('git rebase dev\n');
      break;
    case 1:
      // 合并 dev -> main 成功后, 获取历史提交信息
      shell.stdin.write('git log --format="%H--%s" -n 10\n');
      break;
    case 2:
      // 获取提交信息成功
      console.log(data);
      break;
  }
  step++;
});

shell.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
  shell.stdin.end();
});

// 1. 切换到主分支
shell.stdin.write('git checkout main\n');
step++;
