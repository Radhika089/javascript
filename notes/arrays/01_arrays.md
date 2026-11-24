## What is array ?

Array is a reference data type.It is collection of elements

ex ->

```javascript
let fruits = ["mango", "apple", "banana"];
```

Array indexing =
i don't know how to explain

how we will change the element in array and arrays are mutable
fruits[1]="banana"
console.log(fruits)

type of array is object all reference data types are object
if we want to check if it actually an array =
Array.isArray(fruits)

## Arrays method

pop push shift unShift

if we want to add element at last we will use push
if we want to remove last element then we will use pop
if we want to add as a first element then we will use unshift
if we want to remove first element then we will use shift

```javascript
let fruits = ["mango", "apple", "banana"];
fruits.push("guava");
console.log(fruits); // ["mango", "apple", "banana","guava"]
fruits.pop(); //["mango", "apple", "banana"]
fruits.unshift("grapes"); //["grapes","mango", "apple", "banana"]
fruits.shift("grapes"); // ["mango", "apple", "banana"]
```

push and pop is fast as compared to shift and unshift
but why ??

## difference between primitive and reference data type
