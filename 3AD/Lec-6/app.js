//file descriptor
import fs from "fs";
import { stdin, stdout } from "process";

fs.open("data.txt",'r', (err, fd)=>{
    if(err){
        console.log(err)
    }else{
        fs.read("", "", (err, data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data);
            }
        })
    }
})

// file descriptor is a small integer assigned by operating system 
// when a file socket or other I/O  resources is opened

//fd is used for read/write/close file without knowing the file detail

// data.txt -> fd = 3 
// stdin(3);
// stdout(3);

// stderr(3);

//fs.readFile, fs.writeFile
// fs.write, fs.read, fs.open, fs. low level implementation

//fd is essentially for non blocking I/O socket, networking and resource mangement

//if fd ins't close properly then it camn cause resource leakge


