const Product = require('../models/product');
const shortid = require('shortid');


exports.createProduct = (req, res) => {
    return res.status(200).json({ file:req.file,body:req.body});

}