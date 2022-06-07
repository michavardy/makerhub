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
5. js1
6. js2
7. js3
8. js4
9. js5
---
## setup
---
## introduction
---
## demonstration
---
## Tutorial
- There are four logical operators in JavaScript: 
  - || (OR), 
  - && (AND), 
  - ! (NOT), 
  - ?? (Nullish Coalescing). 
### || (OR)
as applied to booleans
```
    console.log( true || true );   // true
    console.log( false || true );  // true
    console.log( true || false );  // true
    console.log( false || false ); // false
```
If an operand is not a boolean, it’s converted to a boolean for the evaluation.
```
    if (1 || 0) { // works just like    if( true || false )
      console.log( 'truthy!' );
}
```
### Or in an If statement **IMPORTANT**
```
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}
```
### OR "||" returns the first truthy value
The OR || operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were false), returns the last operand.
```
    console.log( 1 || 0 ); // 1 (1 is     truthy)

    console.log( null || 1 ); // 1 (1 is  the first truthy value)
    console.log( null || 0 || 1 ); // 1   (the first truthy value)

    console.log( undefined || null || 0 );    // 0 (all falsy, returns the last value)
```
another example:
```
    let firstName = "";
    let lastName = "";
    let nickName = "SuperCoder";
    
    console.log( firstName || lastName ||     nickName || "Anonymous"); //    SuperCoder
```
### Short-circuit evaluation.
|| processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.
```
    true || console.log("not printed");
    false || console.log("printed");
```
### && (AND)
AND returns true if both operands are truthy and false otherwise:
```
    console.log( true && true );   // true
    console.log( false && true );  //     false
    console.log( true && false );  //     false
    console.log( false && false ); // false
```
### And in an If statement **IMPORTANT**
```
    let hour = 12;
    let minute = 30;

    if (hour == 12 && minute == 30)     {
      console.log( 'The time is 12:30' );
    }
```
### AND “&&” returns the first falsy value
The AND && operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.

```
    // if the first operand is  truthy, AND returns the second   operand:
    console.log( 1 && 0 ); // 0
    console.log( 1 && 5 ); // 5

    // if the first operand is  falsy, AND returns it. The second   operand is ignored
    console.log( null && 5 ); //    null
    console.log( 0 && "no matter    what" ); // 0
```
multiple and statments
```
    console.log( 1 && 2 && null && 3 ); / / null
    console.log( 1 && 2 && 3 ); // 3, the     last one
```
### Precedence of AND && is higher than OR ||
a && b || c && d should be read like this (a && b) || (c && d)
### Don’t replace if with || or &&
Sometimes, people use the AND && operator as a "shorter way to write if".
```
    let x = 1;

    (x > 0) && console.log(     'Greater than zero!' );
```
if is better and more clear
```
    let x = 1;
    
    if (x > 0) console.log( 'Greater than     zero!' );
```
### ! (NOT)
syntax
```
    result = !value;
```
The operator accepts a single argument and does the following:

- Converts the operand to boolean type: true/false.
- Returns the inverse value.
for example
```
    console.log( !true ); // false
    console.log( !0 ); // true
```
### !! to convert to boolean type
```
    console.log( !!"non-empty string" ); /    / true
    console.log( !!null ); // false
```
is the same as 
```
    console.log( Boolean("non-empty     string") ); // true
    console.log( Boolean(null) ); / / false
```
### Nullish Coalescing ??
The result of a ?? b is:

- if a is defined, then a,
- if a isn’t defined, then b.
we can use logical and conditional operators 
```
    let result = (a !== null && a !== undefined) ? a : b;
```
example
```
    let user;
    console.log(user ?? "Anonymous"); // Anonymous (user not defined)
    user = "John";
    console.log(user ?? "Anonymous"); // John (user defined)
```

---
## simple exercise
1. guess what the following output will be and evaluate in node
   1. console.log( null || 2 || undefined );
   2. console.log( console.log(1) || 2 || console.log(3) );
   3. console.log( 1 && null && 2 );
   4. console.log( console.log(1) && console.log(2) );
   5. console.log( null || 2 && 3 || 4 );
2. check range: write a program that takes user three numbers as user input to define lower bounds, upper bounds and evaluation.  save these inputs as variables.  check to see if the evaulation number is in the range, above the range or below the range.  
3. Write the code which asks for a login with prompt.

- If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
- The password is checked as follows:
- If it equals “TheMaster”, then show “Welcome!”,
- Another string – show “Wrong password”,
- For an empty string or cancelled input, show “Canceled”
## Hard Question
1. bit-masking, write a program that takes user input and converts it to binary. make a boolean mask that will add one to the original number.  make a boolean mask that will return zero.  make a boolean mask that will return the same number.
--- 
## Cheat sheet Construction
- write a cheat sheet of everything learned in this section
---