import { watch } from "chokidar"
import { execSync } from 'child_process'

// One-liner for current directory
watch('./src/**/*', {
    ignoreInitial: true,
}).on('all', (event, path) => {
  console.log(event, path);
  execSync(`yarn build`, {
    stdio: 'inherit',
  })

});
