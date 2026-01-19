const fs = require('fs')

fs.readFile('data.txt', "utf-8", (err, data)=>{
    if(err){
       return console.log(err)
    }else{
        console.log(data);
    }
})

fs.writeFile("data.txt", "Good Morning", (err)=>{
    if(err){
        throw err;
    }
})