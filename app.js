//npm: we can use other /libraries/modules as dependicies in our prject from other project, and can publish our own
//npm comes with node , installed

//local dependency(use it only in this particular project) : npm i <packageName>
//global dependency(use it in any project) : npm install -g <packageName>

//package.json (manifest file) : stores important info about project/package

//we can create manually by creatying package.json ina  root, creating properties etc
// or use "npm init (step by step press enter to skip"
//or, npm init -y (everything will be default selected)

//package.json is very crucial because it stores diffrent dependencies and data of library and modules.
//wehn we push it in github we put the massive node_modules in .gitignore , so it doesn't push in repo,
//but we clone it in different pc that doesn't have modules for the project, so then we only run
//npm install, command and it installs every dependencies written in package.json, so that's why .json is important

//we will install nodemon as a devDependicy by ' npm i nodemon -D ' command
//developing environment or testing or some other we need devDependicies.

//lodash is a utility library, using just for this tutorial nothing much

//we write in package.json in script key pair, of "start" : "node app.js" so we can use it as npm start in terminal and it will run
//for devdependecy we write dev": <packagename> app.js and can run it by npm run dev.

// we can uninstall the package locally by 'npm uninstall <packageName>' and globally by adding -g before packageName.
//the direct approach would be delete the package-lock.json file and delete the modules directly and removing the name of dependency from the package.json
//version have 3 numbers in package, e.g; 4.12.23 . so 4 represent a major change, second one is a minor change, last one is just a patch for bug fix
//package-lock.json :

//It stores an exact, versioned dependency tree rather than using starred versioning
//like package.json itself (e.g. 1.0.*). This means you can guarantee the dependencies for other developers
//or prod releases, etc. It also has a mechanism to lock the tree but
//generally will regenerate if package.json changes.

//Async callbacks are functions that are specified as arguments when calling a function
//which will start executing code in the background. When the background code finishes running,
// it calls the callback function to let you know the work is done,
//or to let you know that something of interest has happened   // This is asynchoronous javascript, whole-process is called event loop

/* console.log("hello world");
console.log("nodemon is running and changing it live by restarting, nodemon automatically do it"); */


