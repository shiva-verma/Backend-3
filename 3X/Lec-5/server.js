import {createServer} from "http"
import fs from "fs";
import path from 'path';

const server = createServer((req, res)=>{
   if(req.url == "/"){
    let filepath = path.join(__dirname, "index.html")
    
       fs.readFile(filepath, "utf-8", (err, data)=>{
        if(err){
            res.writeHead(200, {"content-type":"text/html"})
            console.log(err);
        }else{
            res.writeHead(200, {"content-type":"text/html"})
            res.end(data);
        }
    })
   }else if(req.url == "/about"){
        fs.readFile("about.html", "utf-8", (err, data)=>{
        if(err){
            res.writeHead(200, {"content-type":"text/html"})
            console.log(err);
        }else{
            res.writeHead(200, {"content-type":"text/html"})
            res.end(data);
        }
    })
   }
})

server.listen(5000, ()=>{
    console.log("server is running at port 5000")
})

