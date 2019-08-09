const {fork}=require('child_process');

const childProcess=fork('./child.js');

childProcess.send("我是你爸爸");
childProcess.on('data',data=>{
    console.log(data.toString())
})

childProcess.on('message',data=>{
    console.log("子进程传递过来的参数："+data)
    //1.父进程接收到子进程end参数  结束进程
    // if(data==='end'){
    //     process.exit()
    // }
})
//2.
childProcess.on('exit',data=>{
    console.log("父进程接收到了子进程已经结束")
})

