# JavaScript – Arrays and Objects

## What is an array?

An array is a reference data type. It is used to store multiple values in a single variable.

For example:

```javascript
let fruits = ["mango", "apple", "banana"];
```

Here, we have stored three fruits inside one array.

### Array indexing

In JavaScript, array indexing starts from **0**, not 1.

Each element has an index according to its position.

```javascript
let fruits = ["mango", "apple", "banana"];

console.log(fruits[0]); // mango
console.log(fruits[1]); // apple
console.log(fruits[2]); // banana
```

- mango is at index 0.
- apple is at index 1.
- banana is at index 2.

If we try to access an index that doesn't exist, we get `undefined`.

```javascript
console.log(fruits[5]); // undefined
```

### How to change an element in an array?

Arrays are mutable, which means we can change their elements even after creating the array.

```javascript
let fruits = ["mango", "apple", "banana"];

fruits[1] = "grapes";

console.log(fruits); // ["mango", "grapes", "banana"]
```

Here, we changed the element at index 1 from apple to grapes.

### Type of array

If we check the type of an array using `typeof`, JavaScript returns object.

```javascript
let fruits = ["mango", "apple", "banana"];

console.log(typeof fruits); // object
```

This happens because arrays are a type of object in JavaScript.

If we specifically want to check whether something is an array, we use:

```javascript
console.log(Array.isArray(fruits)); // true
```

---

## Array methods

There are four basic array methods that we should know:

1. push()
2. pop()
3. unshift()
4. shift()

### push()

If we want to add an element at the end of an array, we use `push()`.

```javascript
let fruits = ["mango", "apple", "banana"];

fruits.push("guava");

console.log(fruits); // ["mango", "apple", "banana", "guava"]
```

### pop()

If we want to remove the last element from an array, we use `pop()`.

```javascript
let fruits = ["mango", "apple", "banana"];

fruits.pop();

console.log(fruits); // ["mango", "apple"]
```

### unshift()

If we want to add an element at the beginning of an array, we use `unshift()`.

```javascript
let fruits = ["mango", "apple", "banana"];

fruits.unshift("grapes");

console.log(fruits); // ["grapes", "mango", "apple", "banana"]
```

### shift()

If we want to remove the first element from an array, we use `shift()`.

```javascript
let fruits = ["mango", "apple", "banana"];

fruits.shift();

console.log(fruits); // ["apple", "banana"]
```

### Why are push() and pop() faster than shift() and unshift()?

`push()` and `pop()` work at the end of an array, so JavaScript doesn't need to move all the other elements.

But when we use `shift()` or `unshift()`, elements need to move to different indexes.

For example:

```javascript
let numbers = [10, 20, 30];

// shift()
numbers.shift();
```

After removing 10, JavaScript has to move:

- 20 from index 1 to index 0.
- 30 from index 2 to index 1.

That's why `shift()` and `unshift()` generally take more time for large arrays.

**Remember:** push and pop are generally O(1), while shift and unshift are O(n).

---

## Difference between primitive and reference data types

In JavaScript, primitive and reference values behave differently when we assign them to another variable.

### Primitive data types

Primitive values are copied by value.

```javascript
let num1 = 12;
let num2 = num1;

num1++;

console.log(num1); // 13
console.log(num2); // 12
```

Here, `num2` gets its own copy of the value of `num1`.

When we change `num1`, it doesn't affect `num2`.

### Reference data types

Arrays and objects are reference types.

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;

arr1.push(5);

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]
```

Here, both variables refer to the same array.

We didn't create a new array for `arr2`. We just assigned the same array reference to it.

That's why changes made through `arr1` are also visible through `arr2`.

### Interview question: Why does this happen?

Because primitive values are copied as values, whereas arrays and objects are assigned through references to the same object.

**Important:** JavaScript is always pass-by-value. When we assign an object to another variable, the value being copied is the reference to that object.

---

## How to clone an array?

Sometimes we don't want two variables to point to the same array. We want to create a separate array.

For this, we can use different methods.

### First way – slice()

```javascript
let arr1 = ["item1", "item2"];

let arr2 = arr1.slice(0);

console.log(arr2); // ["item1", "item2"]
```

### Second way – concat()

```javascript
let arr1 = ["item1", "item2"];

let arr2 = [].concat(arr1);

console.log(arr2); // ["item1", "item2"]
```

### Third way – spread operator

```javascript
let arr1 = ["item1", "item2"];

let arr2 = [...arr1];

console.log(arr2); // ["item1", "item2"]
```

Now both arrays are different arrays.

```javascript
arr1.push("item3");

console.log(arr1); // ["item1", "item2", "item3"]
console.log(arr2); // ["item1", "item2"]
```

### Important: Shallow copy

All three methods create a shallow copy, not a deep copy.

What does that mean?

If an array contains primitive values, copying it works as expected.

But if an array contains another array or object, the inner reference is still shared.

```javascript
let arr1 = [{ name: "Radhika" }];

let arr2 = [...arr1];

arr2[0].name = "Rahul";

console.log(arr1[0].name); // Rahul
console.log(arr2[0].name); // Rahul
```

This happens because only the outer array was copied. The inner object is still the same object.

For deep cloning, we can use:

```javascript
let arr2 = structuredClone(arr1);
```

This works for supported structured-cloneable values.

---

## Heap memory and call stack

Whenever we work with variables and objects in JavaScript, memory is involved.

JavaScript uses memory to store values and manage their references.

### Call stack

The call stack is where JavaScript keeps track of function execution and execution contexts.

It follows LIFO (Last In, First Out).

```javascript
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
```

Here:

1. first() is called and added to the call stack.
2. second() is called inside first() and added on top.
3. second() finishes execution and gets removed.
4. first() finishes execution and gets removed.

### Heap memory

Heap memory is used for storing objects and other dynamically allocated data.

For example:

```javascript
let fruits = ["mango", "apple", "banana"];
```

The array is an object stored in memory, and the variable `fruits` holds a reference to it.

### Important difference

- Call stack manages function execution and local execution contexts.
- Heap is used for dynamically allocated objects.
- Variables and references are handled according to JavaScript's execution environment and engine implementation.

---

## for of loop and for in loop

Both loops are used to iterate, but they work differently.

### for of loop

`for...of` is used to get the actual values from an iterable like an array or string.

```javascript
let fruits = ["mango", "apple", "banana"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

Output:

```text
mango
apple
banana
```

Here, we get the actual elements of the array.

### for in loop

`for...in` is used to iterate over enumerable property keys of an object.

For an array, it gives the indexes.

```javascript
let fruits = ["mango", "apple", "banana"];

for (let index in fruits) {
  console.log(index);
}
```

Output:

```text
0
1
2
```

### Difference

- for of gives values.
- for in gives keys or property names.
- Use for of when we want to iterate over array values.
- Use for in when we want to iterate over object properties.

**Note:** Avoid using for...in for normal array iteration because it iterates over enumerable property keys, not just array elements.

---

## Array destructuring

Array destructuring allows us to take values from an array and store them in separate variables easily.

Without destructuring:

```javascript
let numbers = [10, 20, 30];

let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
```

With destructuring:

```javascript
let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

### Skipping elements

If we don't need a particular value, we can skip it using a comma.

```javascript
let numbers = [10, 20, 30];

let [a, , c] = numbers;

console.log(a); // 10
console.log(c); // 30
```

### Default values

We can also give default values.

```javascript
let numbers = [10];

let [a, b = 20] = numbers;

console.log(a); // 10
console.log(b); // 20
```

### Swapping variables

We can also swap two variables using array destructuring.

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

---

# Objects in JavaScript

## Introduction to objects

An object is a reference data type used to store data in key-value pairs.

Unlike arrays, objects don't use numerical indexes to access their properties. We access values using their keys.

```javascript
const person = {
  name: "Radhika",
  age: 22,
  hobbies: ["listening", "sports", "writing"],
};
```

Here:

- name, age and hobbies are keys.
- "Radhika", 22 and the hobbies array are values.

We can store different types of values inside an object, including arrays, functions and even other objects.

---

## Bracket and dot notation

There are two ways to access properties inside an object.

### Dot notation

We use the property name directly after a dot.

```javascript
const person = {
  name: "Radhika",
  age: 22,
};

console.log(person.name); // Radhika
console.log(person.age); // 22
```

### Bracket notation

We use square brackets to access the property.

```javascript
const person = {
  name: "Radhika",
  age: 22,
  hobbies: ["listening", "sports", "writing"],
};

console.log(person["hobbies"]); // ["listening", "sports", "writing"]
console.log(person["name"]); // Radhika
```

### Difference between dot and bracket notation

Dot notation is useful when we already know the property name.

Bracket notation is useful when the property name is stored inside a variable or when the key contains spaces or special characters.

```javascript
const person = {
  name: "Radhika",
};

let key = "name";

console.log(person.key); // undefined
console.log(person[key]); // Radhika
```

Why?

Because `person.key` searches for a property literally named "key".

But `person[key]` first checks the value inside the variable `key`, which is "name".

---

## How to iterate objects?

There are different ways to iterate over object properties.

### 1. for in loop

```javascript
const person = {
  name: "Radhika",
  age: 22,
  city: "Moga",
};

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}
```

Output:

```text
name
Radhika
age
22
city
Moga
```

Here, the loop gives us the keys, and we use bracket notation to access their values.

### 2. Object.keys()

`Object.keys()` returns an array containing all the object's own enumerable property names.

```javascript
const person = {
  name: "Radhika",
  age: 22,
  city: "Moga",
};

console.log(Object.keys(person));
```

Output:

```javascript
["name", "age", "city"];
```

We can use for...of to iterate over these keys.

```javascript
for (let key of Object.keys(person)) {
  console.log(person[key]);
}
```

### 3. Object.values()

If we only want values, we can use `Object.values()`.

```javascript
console.log(Object.values(person));
```

Output:

```javascript
["Radhika", 22, "Moga"];
```

### 4. Object.entries()

If we want both keys and values, we can use `Object.entries()`.

```javascript
console.log(Object.entries(person));
```

Output:

```javascript
[
  ["name", "Radhika"],
  ["age", 22],
  ["city", "Moga"],
];
```

We can also use destructuring:

```javascript
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
```

---

## Computed properties

Sometimes we want to use a variable as an object key.

For this, we use computed properties with square brackets.

```javascript
const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

// First way
const obj = {
  [key1]: value1,
  [key2]: value2,
};

console.log(obj);
```

Output:

```javascript
{
  objKey1: "myValue1",
  objKey2: "myValue2"
}
```

We can also do this after creating an empty object.

```javascript
const obj = {};

obj[key1] = value1;
obj[key2] = value2;

console.log(obj);
```

Here, JavaScript uses the value stored inside the variables as object keys.

---

## Spread operator

The spread operator (`...`) is used to expand elements of an array or properties of an object.

### 1. Spread operator with arrays

```javascript
const array1 = [1, 2, 3, 4];

const array2 = [...array1];

console.log(array2); // [1, 2, 3, 4]
```

We can also combine two arrays.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];

console.log(newArray); // [1, 2, 3, 4, 5, 6]
```

We can add new elements while copying an array.

```javascript
const array1 = [1, 2, 3];

const newArray = [...array1, 4, 5];

console.log(newArray); // [1, 2, 3, 4, 5]
```

### 2. Spread operator with objects

We can copy the properties of one object into another object.

```javascript
const obj1 = {
  name: "Radhika",
  age: 22,
};

const obj2 = { ...obj1 };

console.log(obj2);
```

We can also combine objects.

```javascript
const obj1 = {
  name: "Radhika",
};

const obj2 = {
  age: 22,
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
// { name: "Radhika", age: 22 }
```

### 3. Updating values using spread operator

```javascript
const person = {
  name: "Radhika",
  age: 22,
};

const updatedPerson = {
  ...person,
  age: 23,
};

console.log(updatedPerson);
// { name: "Radhika", age: 23 }
```

Here, we copied the old object and updated the age.

**Important:** Spread creates a shallow copy. Nested objects and arrays are still shared references.

---

## Important interview points

1. Arrays are reference types in JavaScript.
2. Array indexing starts from 0.
3. Arrays are mutable.
4. `typeof []` returns `"object"`.
5. Use `Array.isArray()` to check whether a value is an array.
6. push and pop generally work faster than shift and unshift.
7. Primitive values are copied by value.
8. Object references are copied by value, so two variables can point to the same object.
9. slice, concat and spread can create shallow copies of arrays.
10. for...of gives values, while for...in gives keys.
11. Array destructuring makes it easier to extract values.
12. Dot notation and bracket notation are both used to access object properties.
13. Object.keys() returns keys, Object.values() returns values and Object.entries() returns key-value pairs.
14. Spread operator is used to copy and combine arrays and objects.

---

## Questions I should be able to answer without looking at notes

1. Why does array indexing start from 0?
2. Why are arrays called reference data types?
3. Why is typeof an array equal to object?
4. What is the difference between push and unshift?
5. Why are shift and unshift slower?
6. What is the difference between primitive and reference data types?
7. What happens when we assign one array to another variable?
8. What is the difference between shallow copy and deep copy?
9. What is the difference between for...of and for...in?
10. What is array destructuring?
11. What is the difference between dot notation and bracket notation?
12. What is the difference between Object.keys(), Object.values() and Object.entries()?
13. What are computed properties?
14. What is the spread operator?
15. Does the spread operator create a deep copy or shallow copy?
