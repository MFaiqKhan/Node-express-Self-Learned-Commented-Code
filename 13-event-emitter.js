//events in node-js
//user clicks on a btn and we handle that in our program
//used heavily in nodejs

const EventEmitter = require('events'); //EventEmitter is a class, and common practice is calling this a EventEmitter
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const customEmitter = new EventEmitter() //creating a instance from EventEmitter class, 

//on - listen for an event
//emit - emit an event

//customEmitter.emit('faiq-response') //order matters , IF I emit first then listen after, it won't execute the cB.

customEmitter.on('faiq-response', (name,id) => {
    console.log(`recieved ${id} data by ${name} `);
}) //we pass in the string, I named my faiq-response

customEmitter.on('faiq-response', () => {
    console.log(`we can have as many methods we want`);
}) //we can have as many methods we want, 

customEmitter.emit('faiq-response',"faiq", "12") //we have to pass the same name in string to get the callback console log as it emits that log.
//we can also pass arguments in emit
