// init passenger number 0
let passengerCount = 0;

function increment(){
    /* Function to increment the passengerCount var by 1*/
    passengerCount += 1;
    document.getElementById("counter-element").innerText = passengerCount;
}

function reset(){
    /* Function to reset the passengerCount to 0 and clear history records */
    passengerCount = 0;
    document.getElementById("counter-element").innerText = 0;
    document.getElementById("history-el").innerText = "History: ";
}

function save(){
    /* Function to log the current number of passengers*/
    let tempVar = passengerCount + " - ";
    document.getElementById("history-el").innerText += tempVar;
}