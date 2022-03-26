let items = document.querySelectorAll(".user-name");
let numbers = document.querySelectorAll(".user-id");
let users = [];
let userId = [];
console.log(items, numbers);
console.log(`items here are `, items.length);
let getNames = function () {
  for (var i = 0; i < items.length; i++) {
    console.log(items[i].innerText);
    users.push(items[i].innerText);
  }
  console.log(users);
};

let getNumbers = function () {
  let test = [];

  for (var i = 0; i < numbers.length; i++) {
    test.push(numbers[i].id.split("-"));
    console.log(test);
    userId.push(numbers[i].id);
  }
  console.log(test);
  let final = [];
  for (var i = 0; i < test.length; i++) {
    final.push(test[i][2]);
  }
  console.log(final);
  console.log(userId);
};
getNames();
getNumbers();

// let getStuff = function (items) {
//   for (var i = 0; i < items.length; i++) {
//     console.log(items[i]);
//   }
// };

// getStuff();
