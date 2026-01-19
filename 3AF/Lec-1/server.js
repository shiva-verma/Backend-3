// server.mjs
import { createServer } from 'node:http';
import fs from 'fs';

const server = createServer((req, res) => {
  
  fs.readFile("index.html", "utf-8", (err, data)=>{
    if(err){
        return console.log("Internal server error") ;
    }else{
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
    } n
  })
});

server.listen(3000, () => {
  console.log('server is running at port 3000');
});
