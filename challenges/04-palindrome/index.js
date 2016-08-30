const isPalindrome = require('./palindrome');
const colors = require('colors');
const palindromeTestCases = [
  "A but tuba.",
  "A car, a man, a maraca.",
  "A dog, a plan, a canal: pagoda.",
  "A dog! A panic in a pagoda!",
  "A lad named E. Mandala",
  "A man, a plan, a canal: Panama.",
  "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!",
  "A new order began, a more Roman age bred Rowena.",
  "A nut for a jar of tuna.",
  "A Santa at Nasa.",
  "A Santa dog lived as a devil God at NASA.",
];

const notPalindromeTestCases = [
  "In the town where I was born",
  "Lived a man who sailed to sea",
  "And he told us of his life",
  "In the land of submarines",
  "So we sailed up to the sun",
  "Till we found a sea of green",
  "And we lived beneath the waves",
  "in our yellow submarine",
  "A bat tuba.",
  "A Santa at Masa.",
  "A Santa dog, lived as the devil God at NASA."
];

console.log(colors.yellow.underline('RUNNING TESTS:'))
palindromeTestCases.forEach((str) => {
  if(isPalindrome(str)) {
    console.log(colors.green(`Test passed.. -> ${str}`));
  } else {
    console.log(colors.red(`Test failed.. -> ${str}`));
  }
});

notPalindromeTestCases.forEach((str) => {
  if(isPalindrome(str)) {
    console.log(colors.red(`Test failed.. -> ${str}`));
  } else {
    console.log(colors.green(`Test passed.. -> ${str}`));
  }
});
