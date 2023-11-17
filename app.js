console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
    return function(plusNumber) {
      return number + plusNumber;
    };
  }
  
  // Using higher-order function to create plus15
  var plus15 = plus(15);
  
  // Using higher-order function to add 10 to plus15
  var result = plus15(10);
  
  // console.log the result
  console.log(result); // Outputs 25
  
  // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
  
  // Using forEach to print names of each user
  users.forEach(function(user) {
    console.log(user.name);
  });
  
// Using filter to return a new array with only active users
let activeUsers = users.filter(function(user) {
    return user.isActive;
  });
  
  console.log(activeUsers);
  
// Use the Array sort method to sort the users array in-place with the users sorted in descending order by score.
users.sort(function (a, b) {
    return b.score - a.score;
  });
  
  console.log(users);
  


// Use the Array reduce method to return sum of all users' scores.
let totalScore = users.reduce(function (sum, user) {
    return sum + user.score;
  }, 0);
  
  // Once you have the sum of all scores, find the average score from the users.
  let averageScore = totalScore / users.length;
  
  console.log("Total Score:", totalScore);
  console.log("Average Score:", averageScore);
  
  
