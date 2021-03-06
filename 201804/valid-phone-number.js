// Title: Valid Phone Number
// Level: 6 kyu
// Date Completed: 4/27/18
// URL: https://www.codewars.com/kata/valid-phone-number/train/javascript
// Description: Write a function that accepts a string, and returns true if it is in the form of a phone number.  Assume that any integer from 0-9 in any of the spots will produce a valid phone number. Only worry about the following format: (123) 456-7890 (don't forget the space after the close parentheses)

function validPhoneNumber(phoneNumber){
  let phoneRegex = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/
  return phoneRegex.test(phoneNumber)
}
