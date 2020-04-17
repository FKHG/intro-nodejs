const fs= require('fs');
let buf=fs.readFileSync(process.argv[2]);
let str=buf.toString();
let str1=str.split('\n');
console.log(str1.length-1);