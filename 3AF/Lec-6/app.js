#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const cmd = process.argv[2];
const task = process.argv.slice(3).join(" ");

const todos = JSON.parse(fs.readFileSync("todos.json", "utf-8"))

switch(cmd){
    case "add":
      if(!task){
        console.log("task is not found")
        process.exit(1);
      }
      todos.push(task)
      fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
      console.log(`Task Added : ${task}`)
    break;
    case "list":
        if(todos.length <= 0){
            console.log("task is not added yet")
        }
        todos.map((t, ind)=>
             console.log(`${ind + 1}. ${t.task}`)
        )
}