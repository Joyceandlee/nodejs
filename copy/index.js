const { exec, spawn } = require('child_process');

exec('copy 1.txt 2.txt', { cwd: __dirname }, error => {
    console.log(error)
})

const showInfo = spawn('dir');

showInfo.stdout.on('data', data => {
    console.log(data.toString())
})
