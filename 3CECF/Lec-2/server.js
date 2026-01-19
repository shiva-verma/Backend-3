
import { createServer } from 'node:http';
import fs from 'fs'
import path from 'path'



const server = createServer((req, res)=>{

    const filepath = path.join(__dirname, "home.html")

    fs.readFile(filepath, 'utf-8', (err, data)=>{
        if(err){
            res.writeHead(500, {'Content-Type':'text/html'})
            return console.log("Internal server error");
        }else{
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
    })
    
})
server.listen(8000, ()=>{
    console.log('Listening on 127.0.0.1:8000')
})
