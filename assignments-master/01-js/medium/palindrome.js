/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   str=str.replace(/[\s.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
   let n=str.length;
  for(let i=0;i<n/2;i++){
    if(str[i].toLowerCase()!=str[n-1-i].toLowerCase()){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
