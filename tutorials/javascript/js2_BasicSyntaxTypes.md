# IDE Tutorial

## table of contents
---
## description
---
## pre-req
1. os
2. git
3. IDE
4. markdown
---
## setup
---
## introduction
---
## demonstration
---
## Tutorial
### basic syntax example: how to run 
1. open up vs code
2. open your js directory 
3. add a file called basicSyntax.js
4. copy paste the following code:
```
    let x, y, z;    // Statement 1
    x = 5;          // Statement 2
    y = 6;          // Statement 3
    z = x + y;      // Statement 4
    console.log(x ,' + ' ,y , ' = ', z) //Statement 5
```
5. type node basicSyntax.js into terminal to run this program
6. type node into terminal
7. copy paste statements 1-5 line by line into the node terminal and press enter
    a. from now on we will run examples in the terminal using node
#### Notes
- A computer program is a list of "instructions" to be "executed" by a computer.
- In a programming language, these programming instructions are called statements.
- A JavaScript program is a list of programming statements.
- JavaScript statements are composed of:
    - Values 
    - Operators 
    - Expressions
    - Keywords 
    - Comments
- let in statement 1 is a variable assignment keyword
- x, y, z in statment 1 are variables
- x = 5 in statment 2 is a variable assignment, x is the variable, = is the equality operator and 2 is the value.
- console.log() is a logging operator that prints to terminal

### Types
- The JavaScript syntax defines two types of values:
    - Fixed values: Fixed values are called Literals.
    - Variable values: Variable values are called Variables.
- JavaScript Literals
  - numbers
    - examples: 10.5, 1001
  - strings:
    - "john doe"
    - 'john doe'
- JavaScript Variables: run all of these examples in node terminal
  - keywords
    - var
      - The var keyword also tells the browser to create variables:
```
    var x, y;
    x = 5 + 6;
    y = x * 10;
```
    - let
      - The let keyword tells the browser to create variables: 
``` 
    let x, y;
    x = 5 + 6;
    y = x * 10;
```
  - const
  - JavaScript Operators


   |Operator |Description |
   |---------|------------|
   | +	     | Addition   |
   | -	     |Subtraction |
   |*	     |Multiplication|
   |**	     |Exponentiation (ES2016)|
   |/	     |Division|
   |%	     |Modulus (Division Remainder)|
   |++	     |Increment|
   |--	     |Decrement|

   | Operator | Example   | Same As      |
   | -------- | --------- | ------------ |
   | \=       | x = y     | x = y        |
   | +=       | x += y    | x = x + y    |
   | \-=      | x -= y    | x = x - y    |
   | \*=      | x \*= y   | x = x \* y   |
   | /=       | x /= y    | x = x / y    |
   | %=       | x %= y    | x = x % y    |
   | \*\*=    | x \*\*= y | x = x \*\* y |
  - JavaScript Expressions
    - An expression is a combination of values, variables, and operators, which computes to a value.
    - The computation is called an evaluation.
  - Comment
    - Code after double slashes // or between /* and */ is treated as a comment.
    - commented code does not exicute
```
    let x = 5;   // I will be executed

    // x = 6;   I will NOT be executed
```
- JavaScript Variable Names / identifiers / names
  - must begin with 
    - a letter, 
    - a dollar sign
    - an underscore
  - variable names are case sensitive
- Naming Convention
  - Hyphens
    - first-name
    - last-name
    - city-name
  - underscore
    - first_name
    - last_name
    - city_name
  - Pascal Case
    - FirstName
    - LastName
    - CityName
  - Camal Case:
    - firstName
    - lastName
    - cityName
### **convention **
 - Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.
### Rules for Nameing Variables
### basic syntax 3: variables
### var
```
    var x = 5;
    var y = 6;
    var z = x + y;
```
### let
```
    let x = 5;
    let y = 6;
    let z = x + y;
```
### const
```
    const x = 5;
    const y = 6;
    const z = x + y;
```
### undeclared
```
    x = 5;
    y = 6;
    z = x + y;
```
- Always declare JavaScript variables with var,let, orconst.
- The var keyword is used in all JavaScript code from 1995 to 2015.
- The let and const keywords were added to JavaScript in 2015.
- If you want your code to run in older browser, you must use var.
- If you want a general rule: always declare variables with const.
- If you think the value of the variable can change, use let.
### Scope
- **Global Scope** : *Global variables can be accessed from anywhere in a JavaScript program*
- **Function Scope** : *Variables dfined inside a function are not accessible from outside the function*
- **Block Scope** : *Variables declared inside a {} block cannot be accessed from outside the block*
### let has block scope
```
    {
      let x = 2;
    }
    // x can NOT be used here
```
### var has no block scope
```
    {
        var x = 2;
    }
    // x CAN be used here
```
### let scope redeclaration
```
    let x = 10;
    // Here x is 10

    {
    let x = 2;
    // Here x is 2
    }

    // Here x is 10
```
### Hoisting
Hoisting is a wierd java script idea of assigning value to a variable before it has been declared.  its best not to be concerned with this currently.

#### Assignment Operator
### incrementation
```
    let x;
    x = 2;
    x = x + 5;
```
### multi-assignment
```
    let person = "peppa pig", color = 'pink', age = 6;
```
### multi-line assignment
```
    let person = "John Doe",
    carName = "Volvo",
    price = 200;
```
### value = undefined
```
    let studentName;
```
in this case the variable studentName will have the value of undefined
```
    var carName = "car1";
    var carName; \\ this will work
    let houseName = "house1";
    let houseName; \\ this will break
```
## Types
### numbers
```
    let x = 5 + 2 + 3; \\ the value of x is 10
```
### divide by zero
```
    console.log( 1 / 0 ); // Infinity
```
### NaN
- this is case sensitive
```
    console.log( "not a number" / 2 ); // NaN, such division is erroneous
    console.log( NaN + 1 ); // NaN
    console.log( 3 * NaN ); // NaN
    console.log( "not a number" / 2 - 1 ); // NaN
    console.log(NaN ** 0); //
    console.log(Nan === 'nan')
```
### bigInt
```
    // the "n" at the end means it's a BigInt
    const bigInt = 1234567890123456789012345678901234567890n;
```

### strings
```
    let x = "John" + " " + "Doe"; \\  the value of x is John  Doe
```
### string Literals: **very important**
```
    let str = "Hello";
    let phrase = `can embed another ${str}`;
```
### expression Literals: **very important**
```
    // embed an expression
    console.log( `the result is ${1 + 2}` ); // the result is 3
```
### mixed numbers and strings
```
    let x = "5" + 2 + 3; \\  the value of x is '523'
    let y =  2 + 3 + "5"; \\  the value of y is '55'
```
### Boolean
```
    let nameFieldChecked = true; // yes, name field is checked
    let ageFieldChecked = false; // no, age field is not checked
```
### comparison
```
    let isGreater = 4 > 1;
    console.log(isGreater) \\true
```
### null and undefined
```
    let age = null;
    let age2
    console.log(age, age2)
```
### typeof
```
    typeof undefined // "undefined"
    typeof 0 // "number"
    typeof 10n // "bigint"
    typeof true // "boolean"
    typeof "foo" // "string"
    typeof Symbol("id") // "symbol"
    typeof Math // "object"  (1)
    typeof null // "object"  (2)
    typeof console.log // "function"  (3)
```
### typeConversion
```
    typeof String(15) // "string"
    typeof Number('15') // number
    typeof( Boolean(1) ); // true
    typeof( Boolean(0) ); // false

    typeof( Boolean("hello") ); //   true
    typeof( Boolean("") ); // false
    alert( Boolean("0") ); // true, this is truly annoying
    alert( Boolean(" ") ); // spaces, also true (any non-empty string is true) also very annoying
    
```
- numeric conversion rules
   | Value            | Becomes…    |
   | ---------------- | ----------- |
   | `undefined`      | `NaN`       |
   | `null`           | `0`         |
   | `true and false` | `1` and `0` |




---
## simple exercise
1. write a node script with the following variables:
   - name, 
   - age, 
   - school, 
   - years_until_death,
- write a string literal variable that outputs
  ' my name is ${name}, I am ${age} years old.  I go to ${school} school.  I have ${80-age} years to live.
2. Law of Cosines: write a program that takes a general triangle dimensions of two sides and the angle between them.  define them as variables at the top of the script.  using the law of cosines calculate the third side and print it to the console.
3. pascals triangle:  write a program that takes a row number.  define this row number as a variable at the top of the script.  find the max number in the row of pascals triangle and print it to the console.  https://en.wikipedia.org/wiki/Pascal%27s_triangle

   
---
## Cheat sheet Construction
- write a cheat sheet of everything learned in this section
---
