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
