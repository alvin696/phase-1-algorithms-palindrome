function isPalindrome(word) {
  // Convert the input word to lowercase and remove any non-alphanumeric characters
  const cleanedWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  // Reverse the cleanedWord and compare it with the original cleanedWord
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  - Convert the input word to lowercase
  - Remove any non-alphanumeric characters from the input word
  - Reverse the cleaned word
  - Compare the reversed word with the original cleaned word
  - If they are the same, return true (indicating that the input word is a palindrome)
  - Otherwise, return false (indicating that the input word is not a palindrome)
*/

/*
  Add written explanation of your solution here
  The implementation follows these steps:
  1. Convert the input word to lowercase using the `toLowerCase()` method to ensure case-insensitive comparison.
  2. Remove any non-alphanumeric characters from the input word using the `replace()` method with a regular expression `/[^a-zA-Z0-9]/g`. This removes all characters that are not alphanumeric (letters or numbers).
  3. Reverse the cleaned word using the `split()`, `reverse()`, and `join()` methods. `split('')` splits the cleaned word into an array of characters, `reverse()` reverses the order of the array, and `join('')` joins the characters back into a string.
  4. Compare the reversed word with the original cleaned word using the equality operator `===`. If they are the same, return true (indicating that the input word is a palindrome). Otherwise, return false (indicating that the input word is not a palindrome).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
