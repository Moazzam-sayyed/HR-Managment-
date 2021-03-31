const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employe = require('./models/employe');
const config = require('./config/database');

const app = express()

//Load view engine
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//body parser middleware
app.use(bodyParser.urlencoded({ extendes: false}));
//parse application/jason
app.use(bodyParser.json())

//database conectivity
mongoose.connect(config.database); 
let db = mongoose.connection;

//check for connection
db.once('open',function(){
    console.log('connected to MongoDB');
});

//check fo db error
db.on('error',function(err){
    console.log(err);
    });

//bring in database model
let employes = require('./models/employe');

//initialization
app.get('/',function(req,res){
    res.render('index.html');
})

//set public folder
app.use(express.static(path.join(__dirname,'public')));

//add-employee
app.get('/add',function(req,res){
    res.render('new-employe.html');
})

app.get('/show-employe',function(req,res){
    employes.find({},function(err,employes){
        if(err)
        {
            consol.log(err);
        }
        else
        {
            res.render('employes.html',{
                employes:employes
            });
        }
    });
});

app.post('/add',function(req,res){
    let employeinfo = new employe();
    employeinfo.name = req.body.name;
    employeinfo.gender = req.body.gender;   
    employeinfo.dob = req.body.dob;
    employeinfo.address = req.body.address;
    employeinfo.save(function(err){
        if(err)
        {
            console.log(err);
            return;
        }
        else
        {
            //req.flash('success','school added Succesfuly')
            res.redirect('/');
            console.log('data submited');
        }
    });
});
//show employee
//app.get('/show',function(req,res){
//    res.render('index.html');
//})

//ENABLE SERVER 
app.listen(8000, function(){
    console.log("server started at port 8000 ..");
});