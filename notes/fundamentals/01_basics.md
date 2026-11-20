# JavaScript Basics

## 1. History of JavaScript

JavaScript was created by **Brendan Eich in 1995** at Netscape. Its first version was developed in approximately 10 days.

### How did JavaScript get its name?

JavaScript went through three names:

1. **Mocha** – Original name.
2. **LiveScript** – Later renamed.
3. **JavaScript** – Final name adopted in 1995.

**Note:** JavaScript and Java are two completely different programming languages. They have different syntax, concepts and use cases.

### JavaScript vs JScript

In the early days of web development:

- Netscape used JavaScript.
- Microsoft developed JScript for Internet Explorer.
- Different browser implementations created compatibility issues.
- Developers had difficulty making websites behave consistently across browsers.

This created a need for a common standard.

---

## 2. What is ECMAScript?

To solve standardization problems, JavaScript was submitted to ECMA International.

ECMA standardized the language specification under the name **ECMAScript**.

Let's understand the difference:

- **JavaScript:** The programming language we write and use.
- **ECMAScript:** The standard that defines the core rules, syntax and features of JavaScript.
- **JavaScript engines:** Programs that execute JavaScript code according to the language specification.

Examples of JavaScript engines:

- V8 – Used by Chrome and Node.js.
- SpiderMonkey – Used by Firefox.
- JavaScriptCore – Used by Safari.

**Remember:** JavaScript follows the ECMAScript specification, but it also provides additional features through its runtime environment, such as the DOM in browsers and file system APIs in Node.js.

---

## 3. Important ECMAScript Versions

| Version      | Release year | Importance                                    |
| ------------ | -----------: | --------------------------------------------- |
| ES1          |         1997 | First ECMAScript edition                      |
| ES3          |         1999 | Important language improvements               |
| ES5          |         2009 | Introduced strict mode and other improvements |
| ES6 / ES2015 |         2015 | Major update with modern JavaScript features  |

### Important ES6 features

- `let` and `const`
- Arrow functions
- Classes
- Template literals
- Destructuring
- Modules
- Promises
- Default parameters
- Spread and rest operators

ES6 was a major milestone in modern JavaScript development.

After ES2015, ECMAScript started following a yearly release cycle.

---

## 4. What is TC39?

TC39 stands for Technical Committee 39.

It is responsible for developing and maintaining the ECMAScript standard.

Its responsibilities include:

- Discussing new JavaScript features.
- Evaluating new proposals.
- Improving existing language features.
- Working towards standardization.

TC39 includes representatives from browser vendors, companies and the developer community.

---

## 5. TC39 Proposal Stages

New JavaScript features generally go through five numbered stages:

| Stage   | Name        | Meaning                                            |
| ------- | ----------- | -------------------------------------------------- |
| Stage 0 | Strawperson | Initial idea                                       |
| Stage 1 | Proposal    | Problem and possible solution are explored         |
| Stage 2 | Draft       | Formal specification is developed                  |
| Stage 3 | Candidate   | Ready for implementation feedback and final review |
| Stage 4 | Finished    | Ready for inclusion in the ECMAScript standard     |

**Remember:** Stage 4 means the proposal has completed the process and is ready to become part of the standard.

---

## 6. JavaScript Compatibility and Babel

### Backward Compatibility

Newer JavaScript engines generally continue supporting older JavaScript features.

For example, code written using older JavaScript syntax can generally run in modern browsers.

### Forward Compatibility

Older browsers may not understand newer JavaScript features introduced after their release.

This can create compatibility issues.

### What is Babel?

Babel is a JavaScript compiler commonly used to transform modern JavaScript syntax into older JavaScript syntax so that older browsers can understand it.

Example:

Modern JavaScript:

```javascript
const greet = (name) => `Hello, ${name}`;
```

Babel can transform it into:

```javascript
var greet = function (name) {
  return "Hello, " + name;
};
```

**Important:** Babel mainly transforms syntax. Some newer JavaScript features, especially built-in APIs, may require polyfills because changing the syntax alone cannot provide missing functionality.

---

## 7. Your First JavaScript Program (Hello World)

JavaScript code can be executed in different environments:

- **Browser Console:** Run JavaScript directly in the browser's Developer Tools.
- **HTML File:** Add JavaScript to an HTML page using the `<script>` tag.
- **Node.js:** Execute JavaScript outside the browser.

Our first JavaScript program:

```javascript
console.log("Hello World");
```

### Explanation

- `console` is an object.
- `log()` is a method used to display output in the console.
- `"Hello World"` is a string.
- `;` is a semicolon used to terminate a statement.

**Output:**

```text
Hello World
```

**Note:** `console.log()` is commonly used for debugging and checking values during development.

---

## 8. JavaScript Comments

Comments are used to explain code or provide additional information.

They are ignored by the JavaScript engine and are not executed.

### 1. Single-line Comments

Use `//` to write a single-line comment.

```javascript
// This is a single-line comment
console.log("Hello World");
```

### 2. Multi-line Comments

Use `/* */` to write comments across multiple lines.

```javascript
/*
This is a multi-line comment.
It can span multiple lines.
*/

console.log("Hello World");
```

### Why do we use comments?

- To explain code.
- To improve code readability.
- To make code easier to understand and maintain.
- To temporarily disable a line of code while debugging.

---

## 9. What are Variables?

Variables are containers used to store data.

We can access their values later and, depending on how we declare them, change those values.

Example:

```javascript
var firstName = "Hii";

console.log(firstName);
```

Output:

```text
Hii
```

We can also change the value:

```javascript
firstName = "Hii World";

console.log(firstName);
```

Output:

```text
Hii World
```

### What is `use strict`?

Strict mode makes JavaScript follow some stricter rules and helps catch certain programming mistakes.

We can enable it using:

```javascript
"use strict";

x = 10; // ReferenceError: x is not defined
```

Without strict mode, assigning a value to an undeclared variable could accidentally create a global variable in older non-module scripts.

**Note:**

- Strict mode can be enabled using `"use strict";`.
- JavaScript modules and class bodies automatically use strict mode.
- It helps prevent some common mistakes.

---

## 10. Rules for Naming Variables

While declaring variables, we need to follow certain naming rules.

1. Variable names can contain letters, numbers, `_` and `$`.
2. A variable name cannot start with a number.
3. A variable name can start with a letter, `_` or `$`.
4. Spaces are not allowed in variable names.
5. Reserved keywords such as `let`, `const` and `if` cannot be used as variable names.
6. JavaScript is case-sensitive.

Example:

```javascript
let firstName = "Radhika"; // Valid
let _name = "Radhika"; // Valid
let $price = 500; // Valid
let user1 = "John"; // Valid

// let 1user = "John";     // Invalid
// let first name = "John"; // Invalid
```

### Naming conventions

We commonly use:

**1. camelCase**

The first word starts with a small letter and the next words start with capital letters.

```javascript
let firstName = "John";
let userAge = 22;
```

**2. snake_case**

Words are separated using underscores.

```javascript
let first_name = "John";
let user_age = 22;
```

JavaScript developers commonly prefer camelCase for variables and functions.

---

## 11. `var`, `let` and `const`

JavaScript provides three keywords to declare variables.

### 1. var

- Function-scoped.
- Can be redeclared.
- Can be reassigned.
- Can be accessed before its declaration in some situations because of hoisting, but its initial value is `undefined`.

```javascript
var name = "John";

var name = "Peter"; // Redeclaration allowed

name = "David"; // Reassignment allowed

console.log(name);
```

Output:

```text
David
```

### 2. let

- Block-scoped.
- Cannot be redeclared in the same scope.
- Can be reassigned.
- Hoisted but cannot be accessed before declaration because of the Temporal Dead Zone.

```javascript
let age = 22;

age = 23; // Allowed

// let age = 25; // Error in the same scope

console.log(age);
```

### 3. const

- Block-scoped.
- Cannot be redeclared in the same scope.
- Cannot be reassigned.
- Must be initialized when declared.

```javascript
const PI = 3.14;

console.log(PI);

// PI = 3.15; // Error
```

### Important difference

| Feature                          | var       | let   | const |
| -------------------------------- | --------- | ----- | ----- |
| Scope                            | Function  | Block | Block |
| Redeclaration                    | Yes       | No    | No    |
| Reassignment                     | Yes       | Yes   | No    |
| Hoisted                          | Yes       | Yes   | Yes   |
| Initial value before declaration | undefined | TDZ   | TDZ   |

**Important:** `const` prevents reassignment of the variable, not modification of an object or array stored inside it.

Example:

```javascript
const user = {
  name: "John",
};

user.name = "Peter"; // Allowed

console.log(user.name);
```

Output:

```text
Peter
```

But this is not allowed:

```javascript
// user = {}; // Error
```

**Remember:** Prefer `const` by default. Use `let` when you need to reassign a variable. Avoid `var` in modern JavaScript unless you have a specific reason to use it.

---

## 12. Hoisting and Temporal Dead Zone (TDZ)

### What is Hoisting?

Hoisting is JavaScript's behavior of processing declarations before executing the code in their scope.

This means declarations can behave as if they are available before the line where they appear, but the behavior depends on the type of declaration.

Example with `var`:

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

Why?

JavaScript processes the `var` declaration before executing the code, but the assignment happens at its original position.

It behaves approximately like this:

```javascript
var a;

console.log(a);

a = 10;
```

### Hoisting with let and const

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

Why?

`let` and `const` are also hoisted, but they are not initialized until their declaration is evaluated.

### What is the Temporal Dead Zone?

The Temporal Dead Zone (TDZ) is the time between entering a scope and the point where a `let` or `const` variable is initialized.

During this period, accessing the variable results in a ReferenceError.

Example:

```javascript
{
  // TDZ starts

  // console.log(age); // ReferenceError

  let age = 22;

  console.log(age); // 22
}
```

**Remember:**

- `var` is initialized with `undefined` during its declaration processing.
- `let` and `const` remain uninitialized until their declaration is evaluated.
- Accessing `let` or `const` inside the TDZ causes an error.

---

## 13. Strings in JavaScript

A string is a sequence of characters used to store text.

We can create strings using single quotes, double quotes or backticks.

```javascript
let firstName = "Radhika";
let city = "Moga";
let message = `Hello World`;
```

### String Indexing

Every character in a string has an index.

Indexing starts from `0`.

Example:

```javascript
let name = "ankit";

// Character:  a  n  k  i  t
// Index:      0  1  2  3  4
```

If we want to print only `i`:

```javascript
console.log(name[3]);
```

Output:

```text
i
```

### String Length

To find the length of a string:

```javascript
console.log(name.length);
```

Output:

```text
5
```

### How to get the last character?

We can use:

```javascript
console.log(name[name.length - 1]);
```

Output:

```text
t
```

Why `length - 1`?

Because indexing starts from `0`, but length starts counting from `1`.

### Important String Methods

**1. trim()**

Removes whitespace from the beginning and end of a string.

```javascript
let name = "   Radhika   ";

console.log(name.trim());
```

Output:

```text
Radhika
```

**2. toUpperCase()**

Converts a string into uppercase.

```javascript
let name = "radhika";

console.log(name.toUpperCase());
```

Output:

```text
RADHIKA
```

**3. toLowerCase()**

Converts a string into lowercase.

```javascript
let name = "RADHIKA";

console.log(name.toLowerCase());
```

Output:

```text
radhika
```

**4. slice()**

Extracts a part of a string.

Syntax:

```javascript
string.slice(startIndex, endIndex);
```

The end index is not included.

Example:

```javascript
let name = "JavaScript";

console.log(name.slice(0, 4));
```

Output:

```text
Java
```

Another example:

```javascript
console.log(name.slice(4));
```

Output:

```text
Script
```

We can also use negative indexes:

```javascript
console.log(name.slice(-6));
```

Output:

```text
Script
```

### Is String Mutable or Immutable?

Strings in JavaScript are immutable.

Immutable means we cannot change the original string directly after creating it.

Example:

```javascript
let name = "Radhika";

name[0] = "M";

console.log(name);
```

Output:

```text
Radhika
```

The original string does not change.

However, we can create a new string and assign it to the variable:

```javascript
name = "Madhika";

console.log(name);
```

---

## 14. typeof Operator

The `typeof` operator is used to check the type of a value.

Example:

```javascript
let age = 22;
let name = "Radhika";
let isStudent = true;

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
```

Output:

```text
number
string
boolean
```

Some more examples:

```javascript
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof 10n); // bigint
console.log(typeof Symbol()); // symbol
```

**Important:** `typeof null` returns `"object"`. This is a historical bug in JavaScript that has been kept for backward compatibility.

---

## 15. Type Conversion

Type conversion means changing a value from one data type to another.

There are two common ways:

1. Implicit conversion (JavaScript converts the value automatically).
2. Explicit conversion (we convert the value ourselves).

### Converting Number to String

**Method 1: Using an empty string**

```javascript
let num = 22;

num = num + "";

console.log(typeof num);
```

Output:

```text
string
```

**Method 2: Using String()**

```javascript
let num = 22;

let str = String(num);

console.log(typeof str);
```

Output:

```text
string
```

### Converting String to Number

**Method 1: Using unary plus (+)**

```javascript
let str = "25";

let num = +str;

console.log(typeof num);
```

Output:

```text
number
```

**Method 2: Using Number()**

```javascript
let str = "25";

let num = Number(str);

console.log(typeof num);
```

Output:

```text
number
```

### Important: Invalid conversions

```javascript
console.log(Number("25")); // 25
console.log(Number("hello")); // NaN
console.log(Number("")); // 0
```

`NaN` means Not-a-Number. It is a special numeric value used when a mathematical operation or conversion does not produce a valid number.

```javascript
console.log(typeof NaN); // number
```

---

## 16. String Concatenation

String concatenation means joining two or more strings together.

We can use the `+` operator.

Example:

```javascript
let firstName = "Radhika";
let lastName = "Bansal";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Radhika Bansal
```

We can also concatenate strings with numbers.

```javascript
let age = 22;

console.log("My age is " + age);
```

Output:

```text
My age is 22
```

**Remember:** When `+` is used with a string, JavaScript generally performs string concatenation.

```javascript
console.log("10" + 20); // "1020"
console.log(10 + 20); // 30
```

---

## 17. Template Literals

Template literals were introduced in ES6.

They use backticks (`` ` ``) instead of single or double quotes.

They make it easier to insert variables and expressions inside strings.

We use `${}` to insert a value.

Example:

```javascript
let firstName = "Radhika";
let age = 22;

let message = `My name is ${firstName} and I am ${age} years old.`;

console.log(message);
```

Output:

```text
My name is Radhika and I am 22 years old.
```

### Why use Template Literals?

- Easier string concatenation.
- We can insert variables directly.
- We can insert expressions.
- Supports multiline strings.

Example with an expression:

```javascript
let a = 10;
let b = 20;

console.log(`The sum is ${a + b}`);
```

Output:

```text
The sum is 30
```

---

## 18. undefined vs null

Both `undefined` and `null` represent the absence of a value, but they are used differently.

### undefined

A variable has been declared but has not been assigned a value.

```javascript
let name;

console.log(name);
```

Output:

```text
undefined
```

JavaScript also returns `undefined` when accessing a missing object property.

```javascript
let user = {};

console.log(user.name); // undefined
```

### null

`null` is an intentional absence of a value. We assign it ourselves.

```javascript
let user = null;

console.log(user);
```

Output:

```text
null
```

### Difference

| undefined                                   | null                              |
| ------------------------------------------- | --------------------------------- |
| Usually means a value has not been assigned | Intentionally represents no value |
| Often assigned by JavaScript                | Usually assigned by the developer |
| typeof returns "undefined"                  | typeof returns "object"           |

**Important:**

```javascript
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

---

## 19. Booleans and Comparison Operators

A Boolean is a data type that has only two values:

- `true`
- `false`

Example:

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

### Comparison Operators

Comparison operators compare two values and return a Boolean result.

| Operator | Meaning                                |
| -------- | -------------------------------------- |
| `>`      | Greater than                           |
| `<`      | Less than                              |
| `>=`     | Greater than or equal to               |
| `<=`     | Less than or equal to                  |
| `==`     | Equal to (allows type conversion)      |
| `===`    | Strictly equal (checks value and type) |
| `!=`     | Not equal to (allows type conversion)  |
| `!==`    | Strictly not equal                     |

### Difference between == and ===

**Double equals (==)**

It compares values after performing type conversion when necessary.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

**Triple equals (===)**

It checks both value and data type without performing that automatic type conversion.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

**Remember:** Always prefer `===` and `!==` in normal JavaScript development unless you specifically need loose equality.

---

## 20. Truthy and Falsy Values

In JavaScript, every value can be treated as either truthy or falsy when used in a Boolean context.

### Falsy Values

These are the values that behave like `false`:

1. `false`
2. `0`
3. `-0`
4. `0n`
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN`

Everything else is truthy.

### Important Examples

```javascript
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean("Hello")); // true
console.log(Boolean(10)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

**Important:** Empty arrays `[]` and empty objects `{}` are truthy in JavaScript.

---

## 21. if, else if and else Conditions

Conditional statements allow us to execute different blocks of code depending on a condition.

### 1. if statement

Executes code when the condition is true.

```javascript
let age = 22;

if (age >= 18) {
  console.log("You can vote");
}
```

Output:

```text
You can vote
```

### 2. if-else statement

If the condition is true, the `if` block runs. Otherwise, the `else` block runs.

```javascript
let age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

Output:

```text
You cannot vote
```

### 3. if-else if-else statement

Used when we have multiple conditions.

```javascript
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

Output:

```text
Grade B
```

**Remember:** JavaScript checks conditions from top to bottom. Once a condition is true, its block executes and the remaining conditions are skipped.

---

# Quick Revision

- JavaScript was created by Brendan Eich in 1995.
- JavaScript was initially called Mocha, then LiveScript.
- JScript was Microsoft's implementation of JavaScript.
- ECMAScript is the standard that defines JavaScript's core language features.
- TC39 manages the evolution of ECMAScript.
- ES6 (2015) was a major milestone in modern JavaScript.
- TC39 proposals have five numbered stages, from 0 to 4.
- Babel transforms modern JavaScript syntax into older syntax.
- `console.log()` is used to display output.
- Comments are ignored during execution.
- `var` is function-scoped, while `let` and `const` are block-scoped.
- `let` allows reassignment, while `const` does not.
- Hoisting is the behavior of processing declarations before code execution.
- TDZ is the period when `let` and `const` exist in a scope but cannot yet be accessed.
- Strings are immutable.
- String indexing starts from 0.
- `typeof` checks the type of a value.
- `Number()` and `String()` are used for explicit type conversion.
- `undefined` usually means a value has not been assigned.
- `null` represents an intentional absence of value.
- `===` checks value and type.
- Empty arrays and objects are truthy.
- Conditional statements help us execute code based on conditions.

# Interview Questions

1. What is JavaScript?
2. Who created JavaScript?
3. What is the difference between JavaScript and ECMAScript?
4. What is the role of TC39?
5. What are the different TC39 proposal stages?
6. What are the important ES6 features?
7. What is Babel and why do we use it?
8. What is the difference between `var`, `let` and `const`?
9. What is hoisting in JavaScript?
10. What is the Temporal Dead Zone?
11. What is the difference between function scope and block scope?
12. What is the difference between `undefined` and `null`?
13. What is the difference between `==` and `===`?
14. What are truthy and falsy values?
15. Why are strings immutable in JavaScript?
16. What is the difference between implicit and explicit type conversion?
17. What is the difference between string concatenation and template literals?
18. What does the `typeof` operator do?
19. What is strict mode?
20. Why should we prefer `const` and `let` over `var`?
