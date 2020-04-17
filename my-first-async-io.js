const fs= require('fs');
fs.readFile(process.argv[2], (err,data)=>{
    if(!err) {let str=data.toString();
        let str1=str.split('\n');
        console.log(str1.length-1);};
});