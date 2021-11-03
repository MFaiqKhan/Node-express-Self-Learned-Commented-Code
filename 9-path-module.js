//path module is built in module, we can interact with the file paths easily with path module
//The path module contains several helper functions to help make path manipulation easier

const path = require('path')

//seprator property returns my platform specific separator which should be backslash " \ " . 
//separate elements of a file path
console.log(path.sep)       

//path.join method  joins the specified path segments into one path.

const filePath = path.join('/content', 'subfolder', 'test.txt' )
console.log(filePath)

// returns the base file, the inner most file in a folder.
const base = path.basename(filePath) 
console.log(base)

// path.resolve the absolute path of the .js file we are working in
const absolute  = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)

//there are many but few of the methods listed in path module are discussed above.