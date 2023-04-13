const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));


let get_unique_id = () => {
  shortUrl = Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
    return shortUrl
}

console.log(get_unique_id());



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/shorturl', (req, res)=>{

    // code incomplete
//    let url = req.body.url;
    let shorturl = get_unique_id();
    app.get(`/${shorturl}`, (req, res)=>{
        res.redirect(url);
    });
    res.send(`your site is now running at https://urlshortener.adarshkumar35.repl.co/${shorturl}`);
})

app.listen(5000, (req, res)=>{
    console.log("server running");
})
