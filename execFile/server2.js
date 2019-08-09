const {createServer}=require('http');

createServer((req,res)=>{
    res.end('3001')
}).listen(3001,()=>{
    process.stdout.write("server is running at 3001")
})