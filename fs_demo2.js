const fs = require('fs')
const path = require('path')
fs.mkdir(path.join(__dirname,'test1'),
function(err)
{
    if(err) throw err

    console.log('folder created')
})