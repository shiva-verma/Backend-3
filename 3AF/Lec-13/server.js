const express = require("express");
const dbConnect = require("./db/db")
const app = express();
dbConnect();

app.listen(5000, ()=>{
    console.log("server is running at port 4000")
})