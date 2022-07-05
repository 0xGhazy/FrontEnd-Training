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
## The main difference between local and global packages:

local packages are installed in the directory where you run npm install <package-name>, and they are put in the node_modules folder under this directory
```bash
npm i <package-name>
```

global packages are all put in a single place in your system (exactly where depends on your setup), regardless of where you run npm install -g <package-name>
```bash
npm install -g <package-name>
```

# Day 02: what a long day 😒

## Notes
- Creating `.gitignore` file to skip node_modules directory content.
- after downloading project we run `npm install` do download all required files.
- `npm unstall <package-name>` to uninstall any package 

# Event loop
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

it's like main loop in GUI applications that wait for user interactions.

# Asynchronous vs Synchronous programming

## Asynchronous programming
    Asynchronous programming, conversely, is a multithreaded model that’s most applicable to networking and communications. Asynchronous is a non-blocking architecture, which means it doesn’t block further execution while one or more operations are in progress.

don't wait until some process to finish then call the next one. each process processed when it's possible. Example:
```js
// 1st task
console.log("First Task is done now");

// 2nd Task
// some time consuming task => downloading file
console.time()
let result = 0
for (let i = 0; i <= 10000000; i++){
    result += i;
}
console.log("Download is finished !!")
console.timeEnd()

// the 3rd task
console.log("3rd task is done now");
```
## Synchronous programming
    Synchronous is known as a blocking architecture and is ideal for programming reactive systems. As a single-thread model, it follows a strict set of sequences, which means that operations are performed one at a time, in perfect order. While one operation is being performed, other operations’ instructions are blocked. The completion of the first task triggers the next, and so on.
`While one operation is being performed, other operations’ instructions are blocked.` :)

```js
// 1st task
console.log('first task')

// 3rd task
// setTimeout == called sync programming.
setTimeout(() =>{
    console.log("Guess what? I'm the 3rd task :(")
}, 0)
// 2nd task
console.log("I'm the second task :)")
```


# Events-Driven programming.
EventEmitter is a class that helps us create a publisher-subscriber pattern in NodeJS.

```js
// 
const EventEmitter = require('events')
// init a new instance of EventEmitter
const customerEmitter = new EventEmitter()

// LISTEN TO THE `RESPONSE` EVENT AND EXECUTE THE CODE.
customerEmitter.on('response', () => {
    // DO CODE HERE :)
    console.log(`Data resived`)
})

// PUBLISH A NEW EVENT
customerEmitter.emit('response')
```

Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.


