const mongoose= require('mongoose')
//connect database (myinterviewdb) and our localhost
mongoose.connect('mongodb+srv://interviewApp:interview!123@cluster0.do81d.mongodb.net/myinterviewdb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})