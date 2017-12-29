const express = require('express');
const hbs = require('hbs');

var app = express();

app.use((req, res, next) => {
    var time = new Date().toString();
    console.log('${time}:')
    next();

});

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/OMNIFOOD'));

app.get('/', (req, res) => {
    res.send('This is express');
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
       pageTitle: 'About Page',
       year : new Date().getFullYear()
   });
});



app.listen(3000);