#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const program=require('commander');
const inquirer=require('inquirer');
const {spawn}=require('child_process');
//获取当前版本号
const version=require('../package.json').version;

//判断文件是否存在
const projectxist=projectPath=>{
    return fs.existsSync(projectPath)
}
//拷贝
const copy=(targetPath,sourcePath)=>{
    if(!projectxist()){
        fs.mkdirSync(targetPath)
    }
    fs.readdir(sourcePath,(error,files)=>{
        if(error) return console.error(error,"1");
        files.forEach(file=>{
            const filepath=path.join(sourcePath,file)
            const writepath=path.join(targetPath,file)
            fs.stat(filepath,(error,stats)=>{
                if(error) return console.error(error,"2")
                if(stats.isFile()){
                    fs.readFile(filepath,(error,buffer)=>{
                        fs.writeFile(writepath,buffer,error=>{
                            if(error) return console.error(error,"3")
                        })
                    })
                }else{
                    copy(writepath,filepath)
                }
            })
        })
    })
};
const initAction=()=>{
    inquirer
        .prompt([
            {
                type:'input',
                message:'Project name',
                name:'name'
            },{
                type:'input',
                message:'Project description',
                name:'description',
                default:'A Vue/React/Dva project'
            },{
                name:'type',
                type:'list',
                message:'Project type',
                choices:['vue','react','dva']
            },{
                name:'install',
                type:'list',
                message:'install dependences',
                choices:['npm','cnpm','yarn']
            }
        ])
        .then(answers=>{
            const targetPath=path.join(process.cwd(),answers.name);
            const projectname=`lib/${answers.type}-project`;
            const sourcePath=path.join(__dirname,'..',projectname);
            const installname=`${answers.install}.cmd`;
            copy(targetPath,sourcePath)

            const installAction=spawn(installname,['install'],{
                stdio:'inherit',
                cwd:targetPath
            })
            // installAction.stdout.on('data',data=>{
            //     process.stdout.write(`${data}`,"----------")
            // })
            // installAction.on('close',code=>{
            //     console.log(`子进程退出，退出码${code}`)
            // })
        })
}

program
    .version(version)
    .command('init')
    // .description("初始化项目")
    .action(initAction)

program.parse(process.argv)