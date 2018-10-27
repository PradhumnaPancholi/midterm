/*
  ======================================
  VARIABLES, NUMBERS, & STRINGS (WEEK 2)
  ======================================
*/

// ==================================================
/* Variables */
// Step 1 - Variable declarations
// Step 1a - Declare a variable, named "s", and make it equal to 15, in global scope
var s = 15;

// Step 1b - Declare a variable in functional scope and make it equal to 23
(function () {
  var h = 23;
})

// Step 1c - Declare a variable in block (lexical) scope and make it equal to 46
let d = 46;

// Step 1d - Declare a variable that cannot be mutated (changed) and make it equal to 34
const p = 34;

// Step 2 - Variable Assignment
// Step 2a - Assign a decimal number to a block scoped variable
let myDecimal = 1.0;

// Step 2b - Assign a your name to a block scoped variable
let myName = 'Pradhumna';

// ==================================================


// ==================================================
/* Numbers */
// Step 3 - Arithmetic
// Step 3a - Fix the equation: Multiply 8-3 by 9-7 so it equals 2.5
let step3a = (8 - 3) * (9 - 7);

// Step 3b - Fix the equation: Return the remainder of 15/2 using the appropriate operator
let step3b = 15 % 2;

// Step 3c - Fix the equation: Make the following equal 20 and not 1010 Shaun by using the integer parsing method
let step3c = 10 + parseInt("10");
// ==================================================


// ==================================================
/* Strings */
// Step 4 - Working with strings
let step4Name = "Ms. Marvelous";

// Step 4a - Fix the syntax: Using concatenation, replace the {name} with the variable name
let step4a = "Hello,"+ $step4Name+"."+" You look marvelous, " + $step4Name;

// Step 4b - Fix the syntax: Using string interpolation (dirty backticks), fix the syntax so it parses the name variable
let step4b = `Hey there, ${step4Name}. You look marvelous, ${step4Name}.`;

// Step 4c - Fix the syntax: Using the appropriate string method, exchange :name: with the variable name value
let step4c = "Howdy, :name:. You look wicked cool, :name:.";
var value = step4c.replace(':name:', step4Name )
// Step 4d - Add to the syntax: Extract and store only "Marvelous" from the string using the length of the string as the end point
let step4d = step4Name.substr(3, 12);;

// Step 4e - Finish the syntax: Return the position of the first occurrence of 'marvel' in from the variable step4b
let step4e = step4b;

// Step 4f - Finish the syntax: Make the string uppercase
console.log(step4e.toUpperCase());

// Step 4g - Finish the syntax: Output the number of characters in the string
console.log(step4a.toString());
// ==================================================


/*
  ======================================
  ARRAYS (WEEK 3)
  ======================================
*/

// ==================================================
/* Arrays */
// Step 5 - Creating Arrays
// Step 5a - Finish the syntax: Create a single dimensional array with 6 string elements
let step5a = ['Str1','Str2','Str3','Str4','Str5','Str6'];

// Step 5b - Finish the syntax: Create a multi-dimensional array with 2 nested arrays each containing 3 string elements
let step5b = [['Str1','Str2','Str3'], ['Str4','Str5','Str6']];


// Step 6 - Accessing Array Elements
// Step 6a - Finish the syntax: Access the last element of the step5a array
let step6a = step5a[step5a.length - 1];

// Step 6b - Finish the syntax: Access the first element of the step5a array
// BONUS* Grab the last element by using the length of the array!
let step6b = step5a[0] ;

// Step 6c - Finish the syntax: Grab the 3nd element from the 1st nested array in step5b
let step6c = step5b[0][2];


// Step 7 - Removing Array Elements
let step7Array = ['Derek', '55', [1, 2, 3], {sin: '15686855', age: 46, birthdate: new Date(1978,11,22)}];
// Step 7a - Finish the syntax: Remove and store the first element of step7Array
let step7a = step7Array.shift();

// Step 7b - Finish the syntax: Remove and store the last element of step7Array
let step7b = step7Array.pop();

// Step 7c - Finish the syntax: Remove and store '55' from step7Array
let step7c = step7Array.splice('55');


// Step 8 - Adding Array Elements
let step8Array = new Array;
// Step 8a - Add 1 new elements to the beginning of the step8Array
step8Array.unshift('8a');


// Step 8b - Add 2 new elements to the end of the step8Array
step8Array.push('8b');


// Step 8c - Add 1 new element inbetween the elements you created in Step 8a and Step 8b in the step8Array
step8Array.splice( 1, 0, "8c");

// Step 8d - Finish the syntax: Sort the array
let step8d = step4Array.sort();

// ==================================================


/*
  ======================================
  CONDITIONS & LOOPS (WEEK 4)
  ======================================
*/

// ==================================================
/* Conditions */
// Step 9a - Make the statement false
if ("25" === 25) console.log(false);

// Step 9b - Make the statement true
if ("shaun" != "5") console.log(true);

// Step 9c - Make the statements false
if (("5" === "5") (6 === 7)) console.log(false);


// Step 10 - Using a switch statement, evaluate the value of the
// Best Buy stock.
// If the BBY is greater than 20 set the return amount to 10
// If the BBY is greater than 10 set the return amount to 5
// If the BBY is anything else, set the return amount to 0
// Output the returned value
let BBY = Math.floor(Math.random() * (10000 - 100) + 100) / 100;
switch(BBY){
    case (BBY > 20):
      return 10
      break;
    case (BBY > 10):
      return 5
      break;
    default:
      return 0
      
}
let returnAmount;


// Step 11 - Using the if/else if/else structure, complete the following check
let pet = ['Budgee', 'Golden Retriever', 'Red Squirrel'][Math.floor(Math.random() * 3)];
// If your pet is a 'Budgee', then output "You have a bird!".
// Otherwise, if your pet is a 'Golden Retriever', then output "You have a dog!".
// Otherwise, output "You have a Red Squirrel!".
if(pet = 'Budgee'){
  console.log("You have a bird");
}
else if(pet = 'Golden Retriever'){
  console.log("You have a dog!");
}
else{
  console.log("You have a Red Squirrel!");
}
// ==================================================


// ==================================================
/* Loops */
// Step 12 - For Loops
const step12Array = [36, 22, 8, 85, 42, 17];
// Step 12a - Standard For Loop: Loop and output each number in the array
// Remember, this type of loop uses an initializer, a condition, and an incrementer or decrementer


// Step 12b - For Of Loop: Loop and output each number in the array


// Step 12c - For Each Loop: Loop and output each number in the array using an anonymous function


// Step 13 - Conditional Loops
// Step 13a - While Loop: Loop and output each number in the array. Use the array remove method
// that removes the first element from the array and returns it. For your condition, check if the array
// empty to exit the loop.
// NOTE: If you end up in an infinite loop, please comment out this code.


// ==================================================


/*
  ======================================
  FUNCTIONS (WEEK 5)
  ======================================
*/

// ==================================================
/* Window (Built-In) Functions */
// Step 14 - Setting/Clearing a Timeout: After 5 seconds have passed, output: "All done!"
// and clear the timeout.


// Step 15 - Setting/Clearing an Interval: Increment and output count after a second has occurred.
// Once 25 seconds have passed, clear the timeout.
let count = 0;

// ==================================================


// ==================================================
/* Named Functions */
// Step 16a - Create a named function called farewell.
// Give the function one default parameter called 'notification' and make it equal to "World".
// Have the function output: "Goodbye" + notification
function farewell(notification){
  notification = "World";
  console.log("GoodBye" + notification);
}

// Step 16b - Execute the function farewell passing your best friend's name as an argument
farewell(mayur);

// ==================================================


// ==================================================
/* Arrow Functions */
// Step 17a - Finish the syntax: Rewrite the function from 16a as an arrow function
let step17;
farewell = (notification) => {
  notification = "World";
  console.log("GoodBye" + notification);
} 

// Step 17b - Execute the arrow function passing your best friend's name as the argument
farewell(mayur);
// ==================================================


// ==================================================
/* Callbacks */
// Step 18: Fix this syntax: Assign this to a variable
let func = function () {
  console.log("Goodbye");
}
// Step 18a: Create a named function called 'myFunc' that has one parameter called 'callback'.
// Make the body call the callback function.
function myfunc(callback){

}


// Step 18b: Call 'myFunc' and pass the function definition from Step 18 as the argument.
myfunc();

// BONUS: Using the .map() method for arrays, IN ONE LINE, grab only the age
// property and return it:
let bonusAges = [{name: "Shaun", age: 39}, {name: "Janel", age: 34}, {name: "Arpit", age: 22}];

// ==================================================


/*
  ======================================
  EVENTS (WEEK 6)
  ======================================
*/

// Step 19 - Select the 7 node elements, by their IDs,
// from the HTML DOM using their ID name as their variable name.
// NOTE: Use the correct scoping modifier to get full marks.
let notification = document.querySelector('#notification');
let theMouseDownUpEvent = document.querySelector('#theMouseDownUpEvent');
let theClickEvent = document.querySelector('#theClickEvent');
let theFocusBlurEvent = document.querySelector('#theFocusBlurEvent');
let theInputEvent = document.querySelector('#theInputEvent');
let theChangeEvent = document.querySelector('#theChangeEvent');


// ==================================================
/* HTML Event Examples */

// Step 20 - Using addEventListener(), register a callback
// to the click event on the #theClickEvent node element.
// Have the function expression change the #notification content
// to read "A click event has occurred!".




// Step 21a - Using addEventListener(), register a callback
// to the mouse over event on the #theMouseDownUp node element.
// Have the function expression change the #notification content
// to read "A mouse down event has occurred!".
theMouseDownUp.addEventListener('mouseover', function (event) {
  notification.textContent = "A mouse down event has occurred!"
})

// Step 21b - Using the node element #theMouseDownUp's 'mouseout' property,
// assign an anonymous function to the property as a
// value.
// Have the function expression change the #notification content
// to read "A mouse up event has occurred!".
theMouseDownUp.addEventListener('mouseout', function (event) {
  notification.textContent = "A mouse up event has occurred!"
})

// ==================================================


// ==================================================
/* Form Event Examples */
// Step 22a - Using addEventListener(), register a callback
// to the input event on the #theInputEvent node element.
// Have the function expression change the #notification content
// to equal the value of what you enter in the input field.
theInputEvent.addEventListener('input', function (event) {
  event.target.value = input;
})

// Step 23a - Using addEventListener(), register a callback
// to the focus event on the #theFocusBlurEvent node element.
// Have the function expression change the #notification content
// to equal "FOCUSSED"
theFocusBlurEvent.addEventListener('focus', function (event) {
  notification.textContent = "FOCUSSED";
})

// Step 23b - Using the node element #theFocusBlurEvent's 'blur' property,
// assign an anonymous function to the property as a
// value.
// Have the function expression change the #notification content
// to equal "BLURRED"
theFocusBlurEvent.addEventListener('blur', function (event) {
  notification.textContent = "BLURRED";
})


// Step 24 - Using addEventListener(), register a callback
// to the change event on the #changeEvent node element.
// Have the function expression change the #notification content
// to equal the input field's value
thechangeEvent.addEventListener('input', function (event) {
  event.target.value = thechangeEvent;
})

// ==================================================


// ==================================================
/* Other Event Examples */
// Step 25a - Create a named function called 'removeMe' that has
// one parameter called 'event'.
// In the function body, first output, to the console, "I have been clicked".
// Next, using event, remove the 'removeMe' event from the event target.
function removeMe(event) {
  console.log("I have been clicked");
}

// Step 25b - Using the addEventListener(), add a click event to the
// #theClickEvent element and use the 'removeMe' and pass the 'removeMe'
// function as the callback argument.
theClickEvent.addEventListener('click',  removeMe(event)); 

// BONUS: If you have watched the Week 6 video, or attended class,
// you will know about the second way an event can be added and
// removed from an element.
// Create a function called removeMe2.
// Add it to the click property of the #clickEvent element.
// In the body of removeMe2, first output to the console "Here is my bonus remove".
// Next, remove the event using the method we discussed in class.

// ==================================================