const mongoose= require('mongoose')
//connect database (myinterviewdb) and our localhost
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})