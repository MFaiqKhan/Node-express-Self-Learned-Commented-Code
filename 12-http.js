//Http Module (allows to setup a web server)
const http = require('http')                       // import http from "http" (es6 module for require)


/* const server = http.createServer((req,res)=> {
    console.log(req);//we won't console log it right away after running a, as server is waiting for a request, so we have to refresh it
    res.write('This is Http server, faiq Hello world')
    res.end()
})

server.listen(5000); */

//^//^//^   //^//^//^//^//^//^//^//^//^
//this method create a server using callback in it, which have two perimeters,
//we can call it whatever it we want, but a usual practice is to write req(request) and res(response)
//request from the web page for the client(frontend)
//response is what we are sending back.
//server.listen will keep on listening , so the code in terminal after running will not exit, we can see
//our server at localhost:5000, 
//req is a giant object, if console log it will get a big gibberish data in terminal


const server = http.createServer((req,res) => {

    //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // Author COVER THE CAUSE, LATER IN EXPRESS TUTORIAL



    if(req.url === '/'){
        res.end('Welcome to this Page, Faiq(Helloworld)') //we can directly write the string in res.end and can skip res.write(it's a cheat btw)
    }
    else if(req.url === '/about'){
        res.end('Somewhere Exist') 
    }
    else {res.end(`<h1> Doesn't exist </h1>                    
    <p>Sorry, Page you are looking for doesn't exist</p>
    <a href='/'>Click Here to get back to Home Page</a>
    `)
    }  //An unavailable page will show this 
})

server.listen(5000);