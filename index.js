//function 1 - calculateTax
function calculateTax(amount) {
    return amount + 0.10
};

//function 2 - convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase()
};

//function 3 - findMaximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2
};

//function 4 - isPalindrom
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  };

//function 5 - calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discount = originalPrice * (discountPercentage / 100);
    return originalPrice - discount;
};
console.log(findMaximum(10, 20)); // 20
console.log(findMaximum(50, 5));  // 50
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };