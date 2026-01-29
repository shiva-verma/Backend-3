const fs = require("fs");

const filepath = process.argv[2]

fs.readFile(filepath, "utf-8", (err, data)=>{
    if(err){
        console.log("file not fount", err.message);
    }
    const words = data.split(/\s+/)
    console.log(`word count: ${words.length}`)
})