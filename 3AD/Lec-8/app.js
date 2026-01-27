#!/usr/bin/env node

//node app.js add "learn node by wesbos"
//node app.js list
//node app.js delete taskId

const fs = require('fs');
const path = require('path')

const cmd = process.argv[2];
const task = process.argv.slice(3).join(" ");

const DB_PATH = path.join(__dirname, "todos.json");

if(!fs.existsSync(DB_PATH)){
    fs.writeFileSync(DB_PATH, "[]", "utf-8");
}

const todos = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));

switch(cmd){
    case "add":
        if(!task){
            console.log("task not found")
            process.exit(1);
        }
        todos.push({task, done:false})
        fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2));
        console.log(`Task Added: ${task}`)
    break;
    case "list":
        if(todos.length == 0){
            console.log("Todos not added yet");
            process.exit(1);
        }
        todos.map((todo, ind)=>
            console.log(`${ind+1}. ${todo.task}`)
        )
    break;
    case "delete":

    break;
}