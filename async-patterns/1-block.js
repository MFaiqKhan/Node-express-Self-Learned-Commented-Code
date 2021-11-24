const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Home Page')
  }
  if (req.url === '/about') {
    // blocking code //this for loop will block the response until and unless the loop have finished
    //so server will operate slow and laggy. 
    //that's why we use async patterns in our code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.write('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})

