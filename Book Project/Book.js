const express = require('express')
const port = 1008

const app = express()

let Books = []
app.set('view engine','ejs')
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.render("index",{Books})
})
app.post("/addData",(req,res)=>{
    req.body.id = String(Date.now()) 
    Books.push(req.body)
    res.redirect("/")
})
app.get("/deleteData",(req,res)=>{
   deleterecord = Books.filter((e)=>e.id !== req.query.id);
   Books = deleterecord;
    res.redirect("/")
})

app.get("/editData",(req,res)=>{
    singleBook = Books.find((e)=>e.id == req.query.id)
    res.render("update",{singleBook});
})

app.post("/updateData", (req, res) => {
    Books.forEach((e) => {
        if (e.id === req.body.id) {
            e.book = req.body.book;
            e.author = req.body.author;
            e.price = req.body.price;
            e.date = req.body.date;
        } else {
            e;
        }
    });

    res.redirect("/");
});



app.listen(port,(err)=>{
    err?console.log(err):console.log("started " + port)
})