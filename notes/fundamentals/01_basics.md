# JavaScript Basics

## 1. History of JavaScript

JavaScript was created by **Brendan Eich in 1995** at Netscape. Its first version was developed in approximately 10 days.

### How did JavaScript get its name?

JavaScript went through three names:

1. Mocha – Original name.
2. LiveScript – Later renamed.
3. JavaScript – Final name adopted in 1995.

**Note:** JavaScript and Java are two completely different programming languages.

### JavaScript vs JScript

In the early days of web development:

- Netscape used JavaScript.
- Microsoft developed JScript for Internet Explorer.
- Different browser implementations created compatibility issues.
- Developers had difficulty making websites behave consistently across browsers.

### 2. What is ECMAScript?

To solve standardization problems, Netscape submitted JavaScript to ECMA International.

ECMA standardized the language specification under the name **ECMAScript**.

- JavaScript is the programming language.
- ECMAScript is the standard that defines its core rules and features.
- Browser engines implement the JavaScript language according to this standard.

### 3. Important ECMAScript Versions

| Version | Release year | Importance |
|---|---:|---|
| ES1 | 1997 | First ECMAScript edition |
| ES3 | 1999 | Important language improvements |
| ES5 | 2009 | Introduced strict mode and other improvements |
| ES6 / ES2015 | 2015 | Major update with modern JavaScript features |

**Important ES6 features:**
- `let` and `const`
- Arrow functions
- Classes
- Template literals
- Destructuring
- Modules
- Promises

ES6 was a major milestone in modern JavaScript development.

### 4. What is TC39?

TC39 stands for Technical Committee 39.

It is responsible for developing and maintaining the ECMAScript standard.

Its responsibilities include:
- Discussing new JavaScript features.
- Evaluating proposals.
- Improving existing language features.
- Working towards standardization.

TC39 includes representatives from browser vendors, companies, and the developer community.

### 5. TC39 Proposal Stages

New JavaScript features generally go through five numbered stages:

| Stage | Name | Meaning |
|---|---|---|
| Stage 0 | Strawperson | Initial idea |
| Stage 1 | Proposal | Problem and solution are explored |
| Stage 2 | Draft | Formal specification draft is developed |
| Stage 3 | Candidate | Ready for implementation feedback and final review |
| Stage 4 | Finished | Ready for inclusion in the ECMAScript standard |

### 6. JavaScript Compatibility and Babel

**Backward Compatibility:**
Newer JavaScript engines generally support older JavaScript features, allowing older code to continue working in newer browsers.

**Forward Compatibility:**
Older browsers may not understand newer JavaScript features introduced after their release.

**What is Babel?**

Babel is a JavaScript transpiler that converts modern JavaScript syntax into older JavaScript syntax so that older browsers can understand it.

Example:

```javascript
// Modern JavaScript
const greet = (name) => `Hello, ${name}`;
```

Babel can transform it into:

```javascript
// Older JavaScript syntax
var greet = function(name) {
    return "Hello, " + name;
};
```

**Note:** Some newer JavaScript features, especially built-in APIs, may require polyfills because Babel's syntax transformation alone cannot provide them.

### Quick Revision

- JavaScript was created by Brendan Eich in 1995.
- JavaScript was initially called Mocha, then LiveScript.
- JScript was Microsoft's implementation of JavaScript.
- ECMAScript is the standard followed by JavaScript implementations.
- TC39 manages the evolution of ECMAScript.
- ES6 (2015) was a major milestone in modern JavaScript.
- TC39 proposals have five numbered stages, from 0 to 4.

### Interview Questions
1. What is JavaScript, and what is ECMAScript?
2. What is the difference between JavaScript and ECMAScript?
3. Why was ECMAScript standardization important?
4. What are some important ES6 features?