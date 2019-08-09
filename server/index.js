const { exec } = require('child_process');
// const {promisify}=require('util');

//通过进程启动多个服务
function server(cmd) {
    const worker = exec(cmd, (error, stdout, stderr) => {
        if (error) return console.error(error);
    })

    worker.stdout.on('data', data => {
        console.log(data)
    })
}

const serverList = ['server1', 'server2'];

serverList.forEach(servername => {
    server(`node ./${servername}.js`)
})

