const {createServer}=require('http');

createServer((req,res)=>{
    res.end('3000')
}).listen(3000,()=>{
    process.stdout.write("server is running at 3000")
})