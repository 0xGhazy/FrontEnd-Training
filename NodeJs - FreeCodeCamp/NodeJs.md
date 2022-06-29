# Node.js and Express.js - Full Course


# [+] Day 01: lets start :)

## Whats is Node?
Node is a backend framework based on js to run js outside the browser.

## Course Requirements
- HTML, CSS, and JS.
- Callbacks, Promises, Async-Await.



## Common Node globals functions and attributes.
```js
// getting the dirname of current file.
console.log(__dirname);

// get the full path of the current file.
console.log(__filename);

// used to import or use another js modules
let myReq = require('http'); // an example @ 2- Sharing data between modules.


// getting inf oabout current module (file). 
console.log(module);
// get info about env where the program is begin executed.
console.log(process);
```
we can use setInterval() == time.sleep() in python3.
```js
// Example
setInterval(() =>{
    console.log("Hello world");
}, 1000); // wait 1000ms = 1 second.
```

NodeJs built-in modules: [Documrntation](https://nodejs.org/dist/latest-v16.x/docs/api/)

## Difference between synchronous and asynchronous method of fs module

```
g4g article:  https://www.geeksforgeeks.org/difference-between-synchronous-and-asynchronous-method-of-fs-module/

1. Synchronous methods: Synchronous functions block the execution of the program until the file operation is performed. These functions are also called blocking functions. Some of the synchronous methods of fs module in NodeJS are:

    fs.readFileSync()
    fs.renameSync()
    fs.writeSync()
    fs.writeFileSync()
    fs.fsyncSync()
    fs.appendFileSync()
    fs.statSync()
    fs.readdirSync()
    fs.existsSync()


2. Asynchronous methods:
Asynchronous functions do not block the execution of the program and each command is executed after the previous command even if the previous command has not computed the result. The previous command runs in the background and loads the result once it has finished processing. Thus, these functions are called non-blocking functions. Some of the asynchronous methods of fs module in NodeJS are:

    fs.readFile()
    fs.rename()
    fs.write()
    fs.writeFile()
    fs.fsync()
    fs.appendFile()
    fs.stat()
    fs.readdir()
    fs.exists()
```























