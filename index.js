const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("Working or not");
});

app.listen(port,()=>{
    console.log("Server running or not",port);
})