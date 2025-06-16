/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  if(str1.length!=str2.length){
    return false;
  }

  let i,j;
     for(i=0;i<str1.length;i++){
      for(j=0;j<str2.length;j++){
        if(str1[i].toLowerCase()==str2[j].toLowerCase()){
          break;
        }
      }
      if(j==str2.length){
        return false;
      }
     }
     return true;
}

module.exports = isAnagram;
