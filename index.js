function areaOftriangle(b,h){
    return (b+h)/2;

}

const result = areaOftriangle(1,8);
console.log(result)

function joinSomething(a) {
    return "something " + a;
  }
  console.log(joinSomething("cool"));

function calculatePoints(twoPointers, threePointers) {
    const twoPointersScore = 2 * twoPointers;
    const threePointersScore = 3 * threePointers;
    const totalScore = twoPointersScore + threePointersScore;
    return totalScore;
  }
  
  // Example usage:
  const finalScore = calculatePoints(10, 5); // This represents 10 two-pointers and 5 three-pointers
  console.log(finalScore); // Output: 35

function sumLessThan100(num1, num2) {
    if (num1 + num2 < 100) {
      return true;
    } else {
      return false;
    }
  }console.log (sumLessThan100(22,15));

function sumNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumNumbers(4));

function oddishOrEvenish(num) {
    let sum = 0;
    // Loop through each digit in the number and add it to the sum
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    // Check if the sum is odd or even and return the result
    return sum % 2 === 0 ? "Evenish" : "Oddish";
  }
  console.log(oddishOrEvenish(43)); // Output: "Oddish"

function hasPrimeNumberInRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
      if (isPrime(i)) {
        return true;
      }
    }
    return false;
  }
  console.log(hasPrimeNumberInRange(62,66));

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

function leftShift(num, shift) {
    return num * Math.pow(2, shift);
  }
  console.log(leftShift(5,2));

function decimalToBinary(decimal) {
    const binary = parseInt(decimal, 10).toString(2);
    return binary;
  }
  console.log(decimalToBinary(5));