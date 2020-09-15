const express=require('express');
const {signup}=require('../controller/auth');
const router=express.Router();


router.post('/signup',signup);

router.post('/signin',signup);

module.exports =router;

