const fs = require("fs");

const filepath = process.argv[2]

fs.readFile(filepath, "utf-8", (err, data)=>{
    if(err){
        console.log("file is not found", err.message)
    }
    const word = data.split(/\s+/);
    console.log(`word count: ${word.length}`)
})