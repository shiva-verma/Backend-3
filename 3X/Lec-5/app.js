import fs from 'fs'

// fs.readFileSync("data.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

fs.writeFile("./data.txt", "Happy new year", (err)=>{
        if(err){
            throw err;
        }
})