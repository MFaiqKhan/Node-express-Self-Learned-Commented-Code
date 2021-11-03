//(Async) fs module

const {readFile, writeFile} = require('fs')
console.log(" 1.) console logging before executing the async(callback)");
readFile('./content/first.txt', 'utf8',  (err, result) => {  //if we don't provide that utf coding we get buffer value.
    if(err){
        console.log(err)  //we are just console logging the error here, just in case to see what is the error.
        return //it will return undefined as nothing is defined after return if there is an error.
    }
    const first = result
    console.log(first) //If everything is okay, we will get the result.

    readFile("./content/second.txt", 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        console.log(second)

        writeFile('./content/asyncwritefile.txt', `The result is : ${first}, ${second}`, 
        (err,result) => {
            if(err){
                console.log(err)
                return
            }
            const writefile = result
            console.log(writefile);
            console.log(' 2. )logging in callback, obviously after the reading of files and writing of files is finished');
        })
    })
})
//the above is a callback hell representation.
console.log(' 3. )logging at the end');


//1,2,3 shows the async feature






















/* let arrrr = (err, result) => {
    if (err){
        return null
    }
    else{
    console.log(result)}
}

arrrr('','faiq') */