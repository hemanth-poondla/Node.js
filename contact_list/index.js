const express = require('express');
const filePath = require('path');

const port = 8000;

const app = express();


app.set('view engine','ejs');
app.set('views', filePath.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));

// //middleware1
// app.use(function(req,res,next){
//     console.log(":Middleware 1 called");
//     next();
// });


// //middleware2
// app.use(function(req,res,next){
//     console.log(":Middleware 2 called");
//     next();
// });


var contactList = [
    {
        name : 'Hem',
        phone:'1234343322'
    },
    {
        name : 'Steyn',
        phone:'9999999999'
    },
    {
        name : 'Lee',
        phone:'8888888888'
    },

];
app.get('/', function(req, res){
    return res.render('home', {
        title: "My Contact page",
        contact_List : contactList
    });
});

app.get('/profile', function(req, res){
    return res.render('practice', {
        title: "My Profile page"
    });
});

app.post('/create-contact', function(req,res){
    contactList.push({
        name:req.body.name,
        phone: req.body.phone
    })
    return res.redirect('/');
});

app.listen(port, function(err){
    if(err){
        console.log("error in running the server", err);
    }
    console.log("Server Started On", port);
}); 