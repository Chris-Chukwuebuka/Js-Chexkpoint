// string manipulation exercises

//Create a function that counts the number of characters in a string.
function countCharacters(word) {
  return word.length;
}
console.log(countCharacters("hello"));

// write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("hello world"));


function capitalize(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize("hello world"));

//Array manipulation exercises

//Write a functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
  return Math.max(...arr);
  
}   
console.log(findMax([1, 2, 3, 4, 5]));
 function findMin(arr) {
  return Math.min(...arr);  
}
console.log(findMin([1, 2, 3, 4, 5]));

//Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}   
console.log(sumArray([1, 2, 3, 4, 5]));
//Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
  return arr.filter(condition);
}   
console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 3));

//matheatical manipulation exercises

//Write a function to calculate the factorial of a given number.
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}   
console.log(factorial(5));

//Create a function to check if a number is prime or not.
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}   
console.log(isPrime(5));
// Implement a function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
console.log(fibonacci(5));












