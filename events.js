//The first step is to declare the variables
//"getElementById" is attaching the element with the HTML ID
//the id that you are attaching that element to is what goes into the ()
//next we tell the variable what we want it to do
//"addEventListenet" just tells the the variable that there is an action/ event to follow.
//the first arrg is the name of the event
//then the function is triggered everytime that the event takews place
//input instead of click. this allows the function to trigger as soon as numbers are input
//add is a predefined function that will automatically go- must add a furly bracket to tell it what to add
//Parse is so that the return will not be a string
//console showed the result as NaN when number was left out. "||" was necessary to tell it if empty read "blank" as "0"
// * var sum = one+two; *//allows you to add string for numbers
// addSum is predefined

var num1 = document.getElementById("num-1");
var num2 = document.getElementById("num-2");
var addSum = document.getElementById("add-sum");

num1.addEventListener("input",add);
num2.addEventListener("input",add); 
{ 
  function add() { 
    var one = parseFloat(num1.value) || 0; 
    var two = parseFloat(num2.value) || 0; 
    addSum.innerHTML = "The total is " +(num1+num2); 
    
  }
};