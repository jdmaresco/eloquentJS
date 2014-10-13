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


// Chapter 2:  LOOPING  A TRIANGLE

function printPyramid(layers, char) {
  for (var i = 0; i<layers; i++) {
    var line=char;
    while (line.length < i+1) {
    	line += char;
    };
    console.log(line);
  }
}

logHeader("Looping a Triangle");
printPyramid(7,"#");



// Chapter 2:  FIZZBUZZ

logHeader("Fizzing and Buzzing");
for (var i=1; i<101; i++) {
  var result = "";
  if (!(i%3)) result += "Fizz";
  if (!(i%5)) result += "Buzz";
  console.log (result || i);
};


// Chapter 2:  CHESS BOARD

function makeBoard(size) {
  var board="";
  for (var i=0; i<size; i++) {
    for (var j=0; j<size; j++) {
      if (!((i+j) % 2)) board += "#";
      else board += " ";
    }
    board += "\n";
  }
  console.log(board);
}

logHeader("Building a chess board");
makeBoard(12);
