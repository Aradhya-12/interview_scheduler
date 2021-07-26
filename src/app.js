const express= require('express')
const cors= require('cors')
const path = require('path');
const userRouter= require('./routes/userRoutes.js')
const interviewRouter= require('./routes/interviewRoutes.js')
require('../mongoose.js')

const app = express()
const port= process.env.PORT || 8000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// assinging the users and tasks router to our express app
app.use('/users', userRouter)
app.use('/interviews', interviewRouter)
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  console.log(path.join(__dirname, "../client", "build", "index.html"))
});


app.listen(port , () =>{
    console.log("app is up and running on port!!", port)
})