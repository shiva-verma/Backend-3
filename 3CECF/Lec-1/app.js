
import { createServer } from 'node:http';

const server = createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})

    if(req.url == '/about'){
        res.end("Welcome to about us page")
    }else if(req.url = '/conatact'){
        res.end("Welcome to contact page")
    }else{
        res.end("Page not fount")
    }
})
server.listen(8000, ()=>{
    console.log('Listening on 127.0.0.1:8000')
})
