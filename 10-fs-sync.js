//fs module (sync)
//fs module (file system) allows us to work with file system on our computer, 
//helps us store, access, and manage data on our operating system.

const {readFileSync, writeFileSync} = require('fs') // we just destructure them out of the fs model

//👇 is same as above, in above syntax we are just calling it out from the fs model directly.
//const fs = require('fs')
//fs.readFileSync

const first = readFileSync("./content/first.txt", 'utf8')  //(path, options(options can contain encoding and flag))
const second = readFileSync("./content/second.txt", 'utf8')

//console.log(first, second)

//If the file is not there, node will create one and if there is node will overwrite it's content.
writeFileSync("./content/writefilesync-result.txt", `The result is : ${first}, ${second} `, { flag: 'a' } ) 
//if we want to append in the file we will have to pass another argument, first one was path, second one was result
//written in that tilde and third one is an options object name flag set to a .