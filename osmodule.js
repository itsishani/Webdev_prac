//os  module

// 

// path module

// const path = require('path');
// const  a3 = path.extname(__filename)
// const a  = path.basename('C:\\temp\\myfile.html');
// console.log(a3)

//fs module
const fs = require('fs');
// fs.readFile('file.text', 'utf8', (err,data)=>{
//     console.log(err, data)
// })

// const a = fs.readFileSync('file.text')
// console.log(a)

fs.writeFile('file.txt', "This is the content that is given as an input to the file", ()=>{
    console.log("Written in the file")
})
