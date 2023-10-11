const express = require('express');

let app = express();

app.use(express.static('pulic'));

app.get('/', (req, res)=>{
    res.sendFileS(path.realove(__dirname + '/public/index.html'));
});
app.get('/gift', (req,res)=>{
    res.send("9GB lonk :http://**************************");
});
app.get('/about', (req,res)=>{
    res.send("This is about");
});
app.listen(6969, (err)=>{
    if(err) {console.log(err);}
    console.log("App is start at port 6969");
});
