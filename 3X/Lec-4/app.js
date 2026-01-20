import { createServer } from 'http'

const server = createServer((req, res)=>{
    
    if(req.url == '/about'){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("welcome to about us page")
    }else if(req.url == "/contact"){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Welcome to contact page")
    }else{
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Page not found")
    }
});

server.listen(4000, ()=>{
    console.log("Server is running at port 4000");
})