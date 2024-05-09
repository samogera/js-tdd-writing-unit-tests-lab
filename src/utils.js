// src/utils.js

function isPalindrome(word) {
    // Check if input is a string
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Handle empty string case
    if (word.length === 0) {
      return false; // Return false for an empty string
    }
  
    // Check for non-alphabetic characters
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    // Convert the word to lowercase for case-insensitive comparison
    const lowercaseWord = word.toLowerCase();
  
    // Check if the word is a palindrome
    for (let i = 0; i < Math.floor(lowercaseWord.length / 2); i++) {
      if (lowercaseWord[i] !== lowercaseWord[lowercaseWord.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = { isPalindrome };
  