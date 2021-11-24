const { readFile, writeFile } = require("fs").promises;

//const util = require("util"); //contains the promise function for readfile and write file so we don't have to make our own
/* const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */

//so below is a async fs module, but when we have more than 2 requests, async fs module can turn into a nested Callback,
//but we don't wamt, so we write promise and async await patterns
/* readFile('./content/first.txt','utf8',(err,data) => {
    if (!err) {
        console.log(data);
    } else {
        return err
    }
})
 */

//----using promises-----

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}; */

/* 
getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */

//-----using async-await syntax

const start = async () => {
  try {
    /*    const first = await getText("./content/first.txt")
        const second = await getText("./content/second.txt") */
  /*   const first = await readFilePromise("./content/first.txt",'utf8');   //this is when we use util
    const second = await readFilePromise("./content/second.txt",'utf-8'); */
    const first = await readFile('./content/first.txt', 'utf8')  //now we can use directly by just adding .promises to require('fs')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();