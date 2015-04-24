// CHAPTER 2 EXERCISES

/*
--LOOPING A TRIANGLE--
Write a loop that makes seven calls to console.log
to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string
by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the
exercise. Remember that you can click code blocks to edit them.

// Your code here.
*/
// Your code here.
var triangle = "";
for (var i = 0; i < 7; i++) {
  triangle += "#";
  console.log(triangle);
}
// Provided solution
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
/*
--FIZZBUZZ--
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a
significant percentage of programmer candidates. So if you solved it, you’re
now allowed to feel good about yourself.)
*/
// Your code here.
for (var i = 1; i <= 100; i++) {
  var fizzBuzzer = "";
  if (i % 3 === 0) {
    fizzBuzzer += "Fizz";
  }
  if (i % 5 === 0) {
    fizzBuzzer += "Buzz";
  }
  if (!fizzBuzzer) {
    console.log(i);
  } else {
    console.log(fizzBuzzer);
  }
}

// Provided solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

// CHESS BOARD
/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8
and change the program so that it works for any size, outputting a grid of the
given width and height.
*/

// Your code here.
function chessed(num) {
  var chessBoard = "";
  for (var i = 1; i < (num * (num+1)); i++) {
    if (i % (num+1)) === 0) {
      chessBoard += "\n";
    } else if (i % 2 === 0) {
      chessBoard += "#";
    } else {
      chessBoard += " ";
    }
  }
  console.log(chessBoard);
}

//Attempt two

for (var i = 0; i < num)
