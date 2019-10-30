const express = require("express");
const mongoose = require("mongoose");
const Email = require("./models/Email");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path: "./config/config.env"});

const db = require("./db");
db();
app.get("/", (req, res)=>{
    res.send("Sending data")
})

app.post("/data", (req, res)=>{
    console.log(req.body)
    res.end("data sent")
})

app.listen(5000, ()=>{
    console.log("listening on 5000")
})