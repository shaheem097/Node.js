const express = require('express');
const router = express.Router();

const credential = {
    email : "shaheemsha097@gmail.com",
    password : "sha@123"
}


router.post('/login',(req,res)=>{
    if(req.body.email === credential.email && req.body.password === credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        // res.send("Login Successfull");
    }else{
        res.render('base',{title:"Express",logout:"Invalid Username or Password"})
    } 
});

// Dashboard

router.get('/dashboard',(req,res)=>{

    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.render('base')
    }
});

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            // console.log(err);
            res.send("Error");
        }else{
            res.render('base',{title:"Express",logout:"Logout Successfully"})
        }
    })
})


module.exports = router;