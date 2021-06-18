// Problem 1

var is_array = function (input) {
  if (toString.call(input) === "[object Array]") {
    return true;
  } else {
    return false;
  }
};

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

/*
Output :
false
true
*/

//Problem 2

var array_Clone = function (input) {
  return input.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/*
Output :
[ 1, 2, 4, 0 ]
[ 1, 2, [ 4, 0 ] ]
*/

// Problem 3

var first = function (input, n) {
  if (input == null) {
    return 0;
  }
  if (n == null) {
    return input[0];
  }
  if (n < 0) {
    return [];
  } else {
    return input.slice(0, n);
  }
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/*
Output:
7
[]
[ 7, 9, 0 ]
[ 7, 9, 0, -2 ]
[]
*/

// Problem 4

myColor = ["Red", "Green", "White", "Black"];
//converting array to string
console.log(myColor.toString());
//joining array elements
console.log(myColor.join());
//joining array elements with + Operator
console.log(myColor.join("+"));

/*
Output:
Red,Green,White,Black
Red,Green,White,Black
Red+Green+White+Black
*/

//Problem 5
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(item + " ( " + mf + " times ) ");
