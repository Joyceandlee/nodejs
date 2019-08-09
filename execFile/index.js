const { exec, execFile } = require('child_process');
const {promisify}=require('util');
const _execFile=promisify(require('child_process').execFile)


_execFile('nodex',['--version']).then(res=>{
    console.log(res.stdout)
}).catch(err=>{
    console.log(err)
})

execFile('node',['--version'],(error,stdout,stderr)=>{
    if(error) return console.error(error)
    console.log(stdout)
})

exec('nodex --version',(error,stdout,stderr)=>{
    if(error) return console.error(error);
    console.log(stdout)
})

