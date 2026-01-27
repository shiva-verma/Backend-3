#!/usr/bin/env node
const fs = require("fs")
const filepath = process.argv[2];

if(!filepath){
  console.log("file path not found");
  process.exit(1);
}

fs.readFile(filepath, "utf-8", (err, data)=>{
    if(err){
        console.error("Error in reading file", err.message);
        process.exit(1);
    }
    const words = data.trim().split(/\s+/);
    console.log(words);
    console.log(`Word count: ${words.length}`)
    
})
//todolist cms line
//node app.js add "LEARN Node"
//node app.js list
//node app.js delete 1