const express = require('express')
const app = express();
// const cors=require('cors');
const port = process.env.PORT || 5000;

// app.use(cors());

const coursesCatagory =require('./data/coursesCatagory.json');
const courses=require('./data/courses.json');

app.get("/", (req, res)=>{
    res.send("Working or not!!");
});

app.get('/categories', (req, res) => {
    res.send(coursesCatagory)
});




app.get('/courses', (req, res) =>{
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n._id === id);
    res.send(selectedCourses);
});

app.listen(port,()=>{
    console.log("Server running or not",port);
})