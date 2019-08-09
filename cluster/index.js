const { cpus } = require('os');
const cluster = require('cluster');
const cpulength = cpus().length;

if (cluster.isMaster) {
    let worker;
    for (let i = 0; i < cpulength; i++) {
        // cluster.fork()
        worker=cluster.fork();
        worker.send('hello world')
    }

    cluster.on('listening', (worker, address) => {
        console.log('listening:worker' + worker.process.pid + ',Address:' + address.address + ':' + address.port)
    })
    cluster.on('exit',function(worker,code,signal){
        cluster.fork()
    })
    cluster.on('message',msg=>{
        console.log(msg)
    })
} else {
    require('./server.js')

    process.on('message',msg=>{
        console.log(msg)
    })

    process.send("嘻嘻")
}