#!/usr/bin/env node
const fs = require("fs");
const filepath = process.argv[2];

if(!filepath){
    console.log("Usage wordcount <file>")
    process.exit(1);
}
fs.readFile(filepath, "utf-8", (err, data)=>{
        if(err){
            console.error("Enter reading file:", err.message);
            process.exit(1);
        }

        const words = data.trim().split(/\s+/);

        console.log(`Word Count : ${words.length}`)
})