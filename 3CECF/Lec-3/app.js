//file descriptor
// import fs from 'fs'
import os from 'os'


// fs.open('test.txt', 'r', (err, fd)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(fd);
//     }
// })

//////////
console.log(os.platform());

console.log(os.arch());
// console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());

console.log(os.homedir());
//Process module  -> It give you control over current node js process
 
console.log(process.pid)

process.platform

process.argv //cmd line argument

console.log(process.cwd())

process.exit()
process.kill(pid);
process.memoryUsage()

process.on()
process.