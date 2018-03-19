$(document).ready(function(){
  var sentence = prompt("Please enter a sentence.");
  console.log(sentence);

  var capitalize = function(sentence){
    return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase();
  }

  var reverseString = function(sentence){
    return sentence.split("").reverse().join("");
  }

  var middleLetter = function(sentence){
    return sentence.charAt(Math.floor(sentence.length / 2)-1);
  }

  var finalResult = function(){
    alert(reverseString(middleLetter(sentence) + sentence + reverseString(capitalize(sentence))));
  }


  $("#coffeeButton").click(function() {
    alert(sentence);
  });

  $("#puppyButton").click(function() {
    finalResult();
  });
});



////////////////////////////////////////////////////

// var discount = function(){
// 	var userInput = prompt("Find Out Your Savings for your 25% off Coupon, Enter Price for Product:");
//   alert(userInput * .25);
// }
// discount();




/* var leapModulo = function() {
  var yearInput = parseInt(prompt("Please enter a random year"));
  alert(yearInput%4);
}

leapModulo();
 */




/* var dogAge = prompt("how old is your dog? : ");

var age = function(doggyAge){
  alert(doggyAge * 7);
}
alert(age());

age(dogAge);

 */




/*
var character = function(){
  var sentence = prompt("Enter a sentence: ");
  return sentence.charAt(4);
}
alert(character());


 */



/*
var character = "happy monday"

var countCharacter = function(userInput){
  alert(userInput.charAt(4));
}
countCharacter(character);
 */






/* var sentence = "Epicodus Week Two"

var character = function(input) {
  return input.charAt(4);
}
alert(character(sentence)); */




/* var numbers = function(){
  var userInput = prompt("Enter Any Number: ");
return userInput.split("").reverse().join("");
  alert(userInput.split("").reverse().join(""));
}
alert(numbers());

numbers();
 */



/* var sentence = "quick brown fox";

var upper = function(test1) {
  return test1.toUpperCase();
}

alert(sentence.replace(/\b[a-z]{1}/g, upper));


 */



/* var alphabeticalOrder = function(){
  var userInput = prompt("Enter a sentence: ");
  return userInput.split("").sort().join("");
}
alert(alphabeticalOrder()); */
