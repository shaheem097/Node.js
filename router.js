const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyparser = require('body-parser');
const {v4:uuidv4} = require('uuid');
const nocache = require('nocache');

const router = require('./router');

// console.log(router);

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(nocache());

app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));


app.use('/route',router);
  
app.get('/',(req,res)=>{
    if(req.session.user==null){

        res.render('base',{title:'Login System'})
    }else{
        res.render('dashboard');
    }
});

app.listen(PORT,()=>console.log("Listening on Port http://localhost:3000"));const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyparser = require('body-parser');
const {v4:uuidv4} = require('uuid');
const nocache = require('nocache');

const router = require('./router');

// console.log(router);

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(nocache());

app.set('view engine','ejs');

app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));


app.use('/route',router);
  
app.get('/',(req,res)=>{
    if(req.session.user==null){

        res.render('base',{title:'Login System'})
    }else{
        res.render('dashboard');
    }
});

app.listen(PORT,()=>console.log("Listening on Port http://localhost:3000"));