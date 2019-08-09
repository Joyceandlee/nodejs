#!/usr/bin/env/node
const version=require('../package.json').version;
const fs=require('fs');
const path=require('path');

const program=require('commander');
const inquire=require('inquirer');

program
    .version(version)
    .command('init')
    .description('创建项目')
    .action(()=>{
        inquire
            .prompt([
                {
                    type:'input',
                    message:'Project name',
                    name:'name'
                },{
                    type:'input',
                    message:'Project description',
                    name:'description',
                    default:'A Vue.js project'
                }
            ])
    })
