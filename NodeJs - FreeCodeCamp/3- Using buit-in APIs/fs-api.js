const {readFileSync, writeFileSync} = require('fs');

// reading ascii file
const myFile = readFileSync("./readme.txt", 'utf8');
console.log(myFile);


// writing to ascii file

const message = `
/*
    I Was created by fs.js module
*/

Hello world, It's hossam here.
i hope you all fine and safe.

today i start learning NodeJs and i think it's cool <3.

Hope i have been selected as a developer in this training :')
`

const appendedMessage = "\nEnd of the text\n";
// this order is important.
writeFileSync('./write-me.txt', appendedMessage, {flag: 'a'});



/*
    using async read/write
*/

// Using async read write example
const { readFile, writeFile } = require('fs');

readFile('./readme.txt', 'utf8', (err, result) =>{
    if (err){return}
    else{
        const fileContent = result;
        console.log(`readme.txt file content:\n ${fileContent}`)
    }
})

// Using async write example.
writeFile('./write-me-async.txt', '\nthis is text with async method :)\n', (err, result)=>{
        if (err){
            return;
        } else{
            console.log("Done :)");
        }
})
