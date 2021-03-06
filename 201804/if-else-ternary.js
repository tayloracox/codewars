// Title: Training JS #7: if..else and ternary operator
// Level: 8 kyu
// Date Completed: 4/24/18
// URL: https://www.codewars.com/kata/training-js-number-7-if-dot-else-and-ternary-operator/train/javascript
// Description: Complete function saleHotdogs/SaleHotDogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+

function saleHotdogs(n) {
  return (n < 5) ? 100 * n : (n >= 5 && n < 10) ? 95 * n : (n >= 10) ? 90 * n : 0
}
