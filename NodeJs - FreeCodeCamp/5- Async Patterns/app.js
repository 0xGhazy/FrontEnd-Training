const {readFile, writeFile} = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try {
        const content = await readFilePromise("./test-file.txt", "utf8")
        console.log(content);
        await writeFilePromise(
            './async-file.txt',
            `his is the new content :)\n i'm async code\n\n the old content :\t${content}`,
            // {flag: 'a'} // to append to a new data into the file.
        )
    } catch (error){
        console.log(error)
    }
}

// invoke our async function :)
start()



/////////////////////////////// 
// Example of promises in js //
///////////////////////////////

// // Example of promises in js
// const getText = (filePath) => {
//     return new Promise((resolve, reject) => {
//         // reading file async
//         readFile(filePath, 'utf8', (err, result) =>{
//             // check stdout, stderr 
//             if (err){reject(err)}
//             else{resolve(result)}
//         }) // end of read file
//     }) // end of promise
// } // end of getText function


// // Invoke the function.
// getText('./test-file.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


/////////////////////////////////
//     Explaination Example    //
/////////////////////////////////

// create a new promise object
// const p = new Promise((resolve, reject) =>{
//     let flagVar = 1 + 1;
//     // check if flagVar is equal 2
//     if (flagVar == 2){
//         // Promise -> True
//         resolve("True")
//     }else{
//         // Promise -> False
//         reject("False")
//     }
// })


// // Incase of Promise is resolved we use `then`
// p.then((message) => {console.log("It's from Resolve: " + message)})
// .catch((message) => {console.log("It's from Reject: " + message)})
