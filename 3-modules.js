//node js use CommonJS library under the hood , every commonjs file in node is a module ( by default)
//Modules: Encapsulated Code (only share minimum)
//always use ./ to select the file, if there is double directory so you can use ../ (double dot), must be in a string


const names1 = require('./4-names')
const sayHifunc = require('./5-utils') // we use it through importing(modules) and by making it equal to some kind of variable
const data = require('./6-alternative-syntax') 
console.log(data)

require('./7-mind-grenade')/*  we didn't assign it to any variable we just go for the require, 
if we have a function inside of a module that we invoke, that 
 code will run even though we didn't assign it to the variable, so basically when we import a module we invoke it 
reason is that code is not just exported on its own but it actually wraps it in the function
so we can actually invoke it we have a function which is actually getting invoked here */


sayHifunc('susan')  // we use that variable so we can have access to that value
sayHifunc(names1.john)
sayHifunc(names1.peter)

//external modules needs to be installed first, rather built in modules are not installed they are directly executed by require function