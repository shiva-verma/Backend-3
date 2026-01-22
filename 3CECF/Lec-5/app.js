#!/usr/bin/env node

//node app.js add "Learn Node"

//node app.js list

//node app.js delete 1

// 1. Drink water

const fs = require("fs");
const path = require('path');

const command = process.argv[2];
const task = process.argv.slice(3).join(" ");

const DB_PATH = path.join(__dirname, "todos.json");
// const DB_PATH = "todos.json";

if(!fs.existsSync(DB_PATH)){
    fs.writeFileSync(DB_PATH, "[]", "utf-8");
}

const todos = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"))


switch(command){
    case "add":
        if(!task){
            console.log("Usage todo add <task>")
            process.exit(1);
        }
        todos.push({task, done:false})
        fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2));
        console.log(`Added : ${task}`);
        break;
    case "list":
        if(todos.length == 0){
            console.log("No todos yet!")
        }
        todos.forEach((ele, idx) => 
            console.log(`${idx + 1}. ${ele.done ? "[x]" : "[]"} ${ele.task}`)
        );
        break;
    
    case "delete":
        const index = parseInt(task, 10) - 1;

        if(index < 0 || index >= todos.length || isNaN(index)){
            console.log(" Invalid task number");
            process.exit(1);
        }

        const removed = todos.splice(index , 1);
        fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2))
        console.log(`Deleted : "${removed[0].task}"`)

        break;
    default:
        console.log("Command not matched");
}
