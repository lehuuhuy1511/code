const fs = require('fs');
const path = require('path');

let readFile = (path , onReasdFileDone)=>{
   return fs.readFile(path, 'utf-8'  , (err , data)=>{
    if(err){console.log(err)}
    onReasdFileDone(data) ;
   });

}
let readFileSync = (path)=>{
    return fs.readFileSync(path, 'utf-8');
}

let writeFile = (path , writedata ) =>{
    fs.writeFile(path, writedata , (err)=>{
        if(err){console.log(err)}
        console.log("Success");
    });
}

module.exports={
    readFile,
    writeFile
}
