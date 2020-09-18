const express=require('express');
const env=require('dotenv');
const app=express();
const mongoose = require('mongoose');


//routes
const authRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const cartRoutes=require('./routes/cart');

//environment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://root:<password>@cluster0.3ejut.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.3ejut.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }).then(()=>{
        console.log('db connected');
    });

app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);


app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Hello from Server'
    });
});

app.post('/data',(req,res,next)=>{
    res.status(200).json({
        message:req.body
    });
});



app.listen(process.env.PORT,()=>{
    console.log(`server is runing on port ${process.env.PORT}`);
});