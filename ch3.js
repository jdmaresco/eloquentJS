// ======================================================
// Exercises I completed while working through Eloquent Javascript, v2
// Book: http://eloquentjavascript.net/
// ======================================================


// Utility functions
function logHeader(title) {
  console.log("\n\n=====================\n" +
                title + "\n" +
              "=====================\n")
}


// Chapter 3:  MINIMUM

function min(a, b) {
  if (a > b) return b;
  else return a;
};

logHeader("Recreating Math.min");
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(5, 5));
// → 5



// Chapter 3:  RECURSION

function isEven(number) {
  if (number === 0) return true;
  else if (number === 1) return false;
  else if (number > 0) return isEven(number-2);
  else return isEven(number+2);
}

logHeader("Testing evenness using recursion");
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-6));
// → true


// Chapter 3:  Bean Counting

function countBs(str) {
  var charCount = 0;
  for (var i=0; i<str.length; i++) {
  	if (str.charAt(i) === "B")
      charCount++
  }
  return charCount;
};

function countChar(str, searchStr) {
  var charCount = 0;
  for (var i=0; i<str.length; i++) {
  	if (str.charAt(i) === searchStr)
      charCount++
  }
  return charCount;
};

logHeader("Iterating through string characters");
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
