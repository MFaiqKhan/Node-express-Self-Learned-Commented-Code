const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => { //server has a on method, we listen for a request
  res.end('Welcome')                    //we aren't firectly creating an event, but many modules rely on event,
})                                  //http.server have enet of request, if we go into node docs of http.server

server.listen(5000)