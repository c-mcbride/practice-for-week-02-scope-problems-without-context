/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/
let reverseStr = (word) => {
  let wordArray = word.split("");
  let reverseWord = [];

  for(let i = wordArray.length; i >= 0; i--){
    let currentLetter = wordArray[i];
    reverseWord.push(currentLetter);
  }

  reverseWord = reverseWord.join("");
  return reverseWord;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }
