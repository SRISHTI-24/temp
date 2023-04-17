const fs = require('fs')
const path = require('path')


//crreate folder
fs.mkdir(path.join(__dirname,'test1'),
function(err)
{
    if(err) throw err

    console.log('folder created')
})


// create and write file

/*fs.writeFile(path.join(__dirname, 'test', 'hello.text'), 'hello-world', 
function(err){
    if(err) throw err
    console.log('file created')
})*/

//read the file

/*fs.readFile(path.join(__dirname, 'test', 'hello.txt'),'utf-8',
function(err,data){
    if(err) throw err
    console.log(data)
})*/

//rename the file

fs.rename(path.join(__dirname,'test','hello.txt'), path.join(__dirname, 'test', 'bye.txt'), 
function(err){
    if(err) throw err

    console.log('file renamed')

})



