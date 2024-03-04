// File: opyytatain.js

const Opyytatain = {
  // Utility function to reverse a string
  reverseString: function(str) {
    return str.split('').reverse().join('');
  },

  // Utility function to check if a number is even
  isEven: function(num) {
    return num % 2 === 0;
  },

  // Utility function to check if a number is odd
  isOdd: function(num) {
    return !this.isEven(num);
  },

  // Utility function to capitalize the first letter of a string
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Utility function to generate a random integer within a range
  randomIntInRange: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

// Export the Opyytatain object for use in Node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = Opyytatain;
}
