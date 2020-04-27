const express= require('express');
const router=express.Router();
//register api so tht we can send data
// router.get('/',(req,res)=> res.send('user route'));

router.post('/',(req,res)=> {
    console.log(req.body); //body.parsers )req.body)=? object of data that is going to come
    res.send('userroute');
}); //public route 


module.exports = router;