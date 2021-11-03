/* there are many methods on modules but we will just see some of it . like is os module there are lots of methods
from which we can get user data and other different things from the operating system which can be used in our 
advantage  */

const os = require('os')   //built in modules don't need ' ./ ' to execute

// info about current user
const user = os.userInfo()
console.log(user)


// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds `)


// different methods on object syntax .
const currentOS = {
    name: os.type(),  // for mac/linux it shows darwin for windows it outputs windows_NT and etc.
    release: os.release(), // shows the release ver of wind
    totalMen: os.totalmem(), //total memory
    freeMem: os.freemem()  //shows free ram/memory
}

console.log(currentOS);

//There are much more methods and properties, we are just using few of he methods to demonstrate os module features.