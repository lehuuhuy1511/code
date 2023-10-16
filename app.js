const express = require('express');

let app = express();

app.engine('handlebars', handlebar({defaultlayout:'main'
}));
app.set('view engine', 'handlebars');
app.set('views','/views');

app.use(express.static('pulic'));

app.get('/',(req,res)=>{
    try {

    }catch (ex){
        console.log(ex);
    }
    res.rsnder('home',{
        question: questionList[id]
});
app.get('/ask',(req,res)=>{
    res.render('ask');
});

app.post('/ask',(req,res)=>{
    console.log("Ask post");
})

// app.get('/', (req, res)=>{
//     res.sendFileS(path.realove(__dirname + '/public/index.html'));
// });
// app.get('/gift', (req,res)=>{
//     res.send("9GB lonk :http://**************************");
// });
// app.get('/about', (req,res)=>{
//     res.send("This is about");
// });
app.listen(6969, (err)=>{
    if(err) {console.log(err);}
    console.log("App is start at port 6969");
});
