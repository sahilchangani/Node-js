const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/sahil');

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("connected to database");
})

module.exports = db;