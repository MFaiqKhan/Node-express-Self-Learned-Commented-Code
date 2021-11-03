// GLOBALS(global variables)  -In Node there is NO WINDOW, so if you try to access it is in window or browser it will give error!!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed



console.log(__dirname)


//As in Vanilla js we have timer func etc., we also have those in node js etc.
setInterval(() => {  
  console.log('Hello World')
}, 1000) 

/*order to stop hello world press ctrl+c  
and we can execute the program by simply writing node app we 
don't have to write js after .js after node it will work anyway*/
//there is no window in node.js so if you try to access it, it will spit back error and crash

