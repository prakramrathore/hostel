const express = require('express');
const path = require('path');
const app = express();

const port = 8000;

app.use('/static',express.static('static'));
app.use(express.urlencoded())
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.status(200).render('user.pug');
})
app.get('/login', (req,res) => {
    res.status(200).render('login.pug');
})
app.get('/home', (req,res) => {
    res.status(200).render('dashboard.pug');
})
app.get('/query1', (req,res) => {
    res.status(200).render('query1.pug');
})
app.get('/query2', (req,res) => {
    res.status(200).render('query2.pug');
})
app.get('/query3', (req,res) => {
    res.status(200).render('query3.pug');
})
app.get('/query4', (req,res) => {
    res.status(200).render('query4.pug');
})
app.get('/query5', (req,res) => {
    res.status(200).render('query5.pug');
})
app.get('/query6', (req,res) => {
    res.status(200).render('query6.pug');
})

app.listen(port, ()=>{
    console.log(`The applicatioon is started successfully at post ${port}`)
})