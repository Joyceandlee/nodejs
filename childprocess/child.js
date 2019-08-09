process.on('message',data=>{
    console.log("父进程传递过来的参数："+data)
})

process.send("我是子进程")
process.send("end")

process.exit()