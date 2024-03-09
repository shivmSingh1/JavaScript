//ques-3

let num = prompt("enter a number");

if (num % 2 == 0 && num % 3 == 0) {
  console.log("number is divisible by both 2 and 3")
} else {
  console.log("number is not divisible")
}

// ques-4

if (num % 2 == 0 || num % 3 == 0) {
  console.log("number is divisible by only one 2 or 3")
} else {
  console.log("number is not divisible by both")
}

// ques-5

let age = prompt("enter your age");

(age > 18) ? console.log("you can drive") : console.log("you can't driv");