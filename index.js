const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisisyscret'))
app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;

    res.send(`hey there ,${name}`)
})

app.get('/getname', (req, res) => {
    res.cookie('name', 'sahil dhargave');
    res.cookie('animals', 'dog');
    res.send("OK SEND YOU COOKIES!!")
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('Ok Signed Your Cookies')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})
app.listen(3001, () => {
    console.log("SERVING ON PORT 3000!")
})