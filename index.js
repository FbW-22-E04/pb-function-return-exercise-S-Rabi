// The following function returns true if the parameter age is greater than 18.

// Otherwise returns false:

function checkAge(age) {
  return age > 18;
}
console.log(checkAge(20));

// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(a, b) {
  let result = a ** b;
  console.log(result);
}
pow(3, 2);
pow(3, 3);
pow(1, 100);
