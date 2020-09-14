const express=require('express');
const env=require('dotenv');
const app=express();


//environment variable or you can say constants
env.config();

app.listen(process.env.PORT,()=>{
    console.log(`server is runing on port ${process.env.PORT}`);
});