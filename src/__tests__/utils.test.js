// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  // Known use cases
  it('should return true for palindromic words', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('mom')).toBe(true);
    expect(isPalindrome('deified')).toBe(true);
  });

  it('should return false for non-palindromic words', () => {
    expect(isPalindrome('car')).toBe(false);
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('world')).toBe(false);
  });

  // Edge cases
  it('should return true for words with a combination of uppercase and lowercase letters', () => {
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('Aibohphobia')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false); // This should return false for an empty string
  });

  it('should throw an error if input has any non-alphabetic characters', () => {
    expect(() => isPalindrome('12321')).toThrow();
    expect(() => isPalindrome('race car')).toThrow();
    expect(() => isPalindrome('123abc')).toThrow();
  });

  it('should throw an error if input is not a string', () => {
    expect(() => isPalindrome(12321)).toThrow();
    expect(() => isPalindrome(['racecar'])).toThrow();
    expect(() => isPalindrome({ word: 'racecar' })).toThrow();
  });
});
