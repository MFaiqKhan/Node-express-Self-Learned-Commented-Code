// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
//setTimeout, is asynchronous, and even if the time have 0 mili seconds defined, the timeout function is in callback and will
// will be offloaded first and executed
//after all the normal logs been executed