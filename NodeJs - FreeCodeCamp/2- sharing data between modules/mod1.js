
// module attributes/variables.
const fullName = "Hossam Hamdy";
const phoneNumber = "01100000000";
const mySecret = "I love python so much.";

const sayHi = (name) =>{
    console.log(`Hello There ${name}`);
}

// allow to share the passed attributes only.
module.exports = {fullName, phoneNumber, sayHi};
