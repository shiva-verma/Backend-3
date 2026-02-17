const express = require("express");
const dbConnect = require("./database/db")
const app = express();

dbConnect();

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})