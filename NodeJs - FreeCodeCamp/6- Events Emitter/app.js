const EventEmitter = require('events')
const os = require('os');
const {readFile, writeFile} = require('fs');
const customerEmitter = new EventEmitter()



// LISTEN TO THE `RESPONSE` EVENT AND EXECUTE THE CODE.
customerEmitter.on('even', () => {
    // DO CODE HERE :)
    console.log("it's even")
})


// PUBLISH A NEW EVENT
customerEmitter.emit('even')


for (let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        customerEmitter.emit('even')
    }else{
        console.log("--")
    }
}


/***************************************/
//    [+] logger-using-EventEmitter    //
/***************************************/

const checkAvailability = () =>{
    /* FUNCTION TO CHECK IF THE LOGGER FILE IS EXIST
    
    RETURN:
        NONE
    */
    readFile('./myLoggs.txt', (err, result) =>{
        if (err){
            // file doesn't exist so we try to re generate it again.
            writeFile('./myLoggs.txt', 'utf8')
        }
    })
}


const LogEvent = (eventFlag, message) =>{

    const timeNow = Date.now();
    const userData = os.userInfo()
    const username = userData.username;

    try {
        // check if the file is exist before do any operation.
        checkAvailability()
        // append data to the myLoggs.txt
        writeFile(
                './myLoggs.txt',
                `[${eventFlag}] <=> ${timeNow} <=> ${username} <=> ${message}\n`,
                {flag: 'a'} // to append to a new data into the file.
            )
        } catch (error){
            console.log(error)
        }
}



customerEmitter.on('response', (evFlag, evMessage)=>{
    LogEvent(evFlag, evMessage)
})

customerEmitter.emit('response', {evFlag: '+', evMessage: 'Hello World'})

// TODO: [ ] Logger doesn't work well :(, try to solve them.
// TODO: [ ] Refactore the code into OOP paradigm <3

