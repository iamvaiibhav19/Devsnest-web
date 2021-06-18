//problem 1

/*
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

//printing list of properties in Object
console.log(Object.getOwnPropertyNames(student));

//printing list of keys in Object
console.log(Object.keys(student));

//another way to print keys
var Properties = "";
for (let keys in student) {
  Properties += keys + ",";
}
console.log(Properties);
*/

//Problem 2

/*
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log("Before Deletion: ", student, "\n");

delete student.rollno;

console.log("After Deletion: ", student);
*/

//Problem 3

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

const properties = Object.getOwnPropertyNames(student);
console.log(properties.length);

//Problem 4

/*
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let index in library) {
  console.log(library[index].readingStatus);
}
*/

//Problem 5
/*
var Volume = {
  radius: 3,
  height: 4,
};

var Calculation = Math.PI * Volume.radius * Volume.radius * Volume.height;
var volumeCylinder = Calculation.toFixed(4);
console.log(volumeCylinder);
*/

//Problem 6
/*
const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function compare_to_sort(x, y) {
  if (x.title < y.title) return -1;
  if (x.title > y.title) return 1;
  return 0;
}

console.log(library.sort(compare_to_sort));
*/
