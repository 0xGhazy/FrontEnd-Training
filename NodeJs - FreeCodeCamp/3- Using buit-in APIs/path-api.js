// API-Docs: https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

const myPath = path.join("Root", "kali", "test", "windows", "path");

const myDirname = path.dirname(myPath);

const fileExtension = path.extname("HelloWorld.jpg");

console.log(`File Extension: ${fileExtension}`)
console.log(`Directory name: ${myDirname}`);
console.log(`Joined path: ${myPath}`);
