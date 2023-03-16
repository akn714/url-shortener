const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));


let get_unique_id = () => {
  shortUrl = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

console.log(get_unique_id());



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/', (req, res)=>{
    
    // code incomplete
    
})

app.listen(5000, (req, res)=>{
    console.log("server running");
})