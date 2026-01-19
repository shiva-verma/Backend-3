const { createServer } = require('node:http');
const fs = require('fs');
const path = require('path');

console.log(__dirname);

const server = createServer((req, res) => {

    const filepath = path.join(__dirname, 'index.html')
    console.log(filepath);
    
     fs.readFile(filepath, 'utf-8', (err, data)=>{
        if(err){
            res.writeHead(500, {'content-type':'text/html'})
            return res.end("Internal server error")
        }else{
            res.writeHead(200, {'content-type': "text/html"})
            res.end(data)
        }
     })
});

server.listen(3000, () => {
  console.log(`Server running at 3000`);
});
