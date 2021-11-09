const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')   //everytime a request comes in, there is a callback,we are logging out request event. 
  res.end('Hello World') //and we are sending the response of hello world
}) 

//event loop will wait for the callback , and keep listening to the server

server.listen(5000, () => { //server.listen is asynchronous function 
  console.log('Server listening on port : 5000....')
})

//