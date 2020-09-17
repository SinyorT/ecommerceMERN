const express=require('express');
const router=express.Router();
//const {addCategory,getCategories}=require('../controller/category');
const {requireSignin,adminMiddleware}=require('../common-middleware');

const Product =require('../models/product');

router.post('/product/create',requireSignin,adminMiddleware,(req,res)=>{

    res.status(200).json({message:'Hello'});


} );
//router.get('/category/getcategory',getCategories );

module.exports =router;