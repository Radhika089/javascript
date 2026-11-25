// Predict the output and explain why.

// 1.
// console.log(a); // undefined
// var a = 10;
// console.log(a); //10

//  we are trying to access before initialization of var so due to hoisting it is giving error

// 2.
// console.log(a); // reference error
// let a = 20;

//  let is hoisted but it gives reference error due to temporal dead zone

// 3.
// console.log(typeof null); // object
// console.log(typeof undefined); //undefined
// console.log(typeof []); // object
// console.log(typeof {}); // object

// 4.
// console.log("5" + 2); //7
// console.log("5" - 2); // 3
// console.log(true + 1); // 2
// console.log(false + "hello"); //falsehello

// 5.
// const user = {
//   name: "Radhika",
//   age: 22,
// };

// user.age = 23;
// console.log(user);
// {name:"Radhika",age:23}
// user = {
//   name: "Alex",
// };
//  it will give error as we cannot reassigned as we use const

// 6.
let arr1 = [10, 20, 30];
let arr2 = arr1;

arr2.push(40);

console.log(arr1);
console.log(arr2);
// [10,20,30,40] in both

// 7.
let arr = [1, 2, 3];

console.log(arr.length); // 3
console.log(arr[0]); // 1
console.log(arr[3]); // undefined
console.log(Array.isArray(arr)); // true

// 8.
let a = [1, 2, 3];
let b = [...a];

b.push(4);

console.log(a); // [1,2,3,4]
console.log(b); // [1,2,3,4]

// 9.
let user = {
  name: "Radhika",
  address: {
    city: "Moga",
  },
};

let copy = { ...user };

copy.address.city = "Ludhiana";

console.log(user.address.city);
console.log(copy.address.city);

// Ludhiana in both

// 10.
const numbers = [10, 20, 30, 40];

for (let index in numbers) {
  console.log(index);
}
// 0 1 2 3

for (let value of numbers) {
  console.log(value);
}

//  10 20 30 40
