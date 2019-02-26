// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[3]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list[item]) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */
const dupArray = [1, 1, 3, 3, 2, 4, 5];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  const dupFree = array.filter((item, index) => {
    return dupArray.indexOf(item) >= index;
  });
  // Pass the duplicate free array to the callback function.
  return cb(dupFree);
  // Do not mutate the original array.
}

console.log(dupArray);
console.log(
  removeDuplicates(dupArray, function(dup) {
    console.log(dup.sort());
  })
);
