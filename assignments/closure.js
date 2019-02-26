// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function State() {
  let city = "Chicago";
  function whatCity() {
    let name = city;
    return name;
  }
  return whatCity();
}
console.log(State());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  // Return a function that when invoked increments and returns a counter variable.
  return function() {
    ++count;
    return count;
  };
};
const newCounter = counter();
console.log(newCounter(), newCounter(), newCounter(), newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  return {
    increment: (() => {
      ++count;
      return count;
    })(),
    decrement: (() => {
      --count;
      return count;
    })()
  };
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const thisCounter = counterFactory();
counterFactory();
counterFactory();
console.log(counterFactory());
