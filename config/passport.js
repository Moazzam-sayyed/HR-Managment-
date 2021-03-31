const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admin');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
    //local strategy
    passport.use(new LocalStrategy(function(username, password, done){
        //match username
        let query = {username:username};
        Admin.findOne(query,function(err, admin){
            if(err) throw err;
            if(!admin)
            {
                return done(null,false,{type:'danger',message: 'No user found'});
            }
         
            //match password
            bcrypt.compare(password, admin.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null,admin)
                }else{
                    return done(null,false,{type:'danger',message: 'Wrong password'});
                }
            });
        });
    }));
    
    passport.serializeUser(function(admin, done) {
        done(null, admin.id);
      });
    
      passport.deserializeUser(function(id, done) {
        Admin.findById(id, function(err, admin) {
          done(err, admin);
        });
      });
}

