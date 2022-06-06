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
---
## setup
---
## introduction
---
## demonstration
---
## Tutorial
### the If statment
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
```
    const prompt = require('prompt-sync')(); 
    // if this doesn't work then go back to js1_HelloWorld.md and follow setup steps 2-3
    
    let year = prompt('In which year was ECMAScript-2015 specification published?', '');
    if (year == 2015) console.log( 'You are right!' );
```
### the If statment code block 
if statments can trigger code blocks in curly braces
```
    if (year == 2015) {
    console.log( "That's correct!" );
    console.log( "You're so smart!" );
}
```
### bolean conversion
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
```
    if (0) { // 0 is falsy, will never run
    }
    if (1) { // 1 is truthy, will always run
    }
    let cond = (year == 2015); // equality evaluates to true or false
    if (cond) {
    }
```
### The “else” clause
The if statement may contain an optional “else” block. It executes when the condition is falsy.
```
    const prompt = require('prompt-sync')(); 
    let year = prompt('In which year was the ECMAScript-2015    specification published?', '');

    if (year == 2015) {
      console.log( 'You guessed it right!' );
    } else {
  ifconsole.log    console.log( 'How can you be so wrong?' ); // any value except  2015
    }
``` 
### Several conditions: “else if”
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
```
    const prompt = require('prompt-sync')(); 
    let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

    if (year < 2015) {
      console.log( 'Too early...' );
    } else if (year > 2015) {
      console.log( 'Too late' );
    } else {
      console.log( 'Exactly!' );
    }
```
### Conditional operator ‘?’
the only ternary operator that has three operands
```
    let accessAllowed;
    const prompt = require('prompt-sync')(); 
    let age = prompt('How old are you?', '');
    
    if (age > 18) {
      accessAllowed = true;
    } else {
      accessAllowed = false;
    }
    console.log(accessAllowed);

    accessAllowed = (age > 18) ? true : false; // using ? notation
 promptשךק   accessAllowed = age > 18 ? true : false; // without brackets works
    accessAllowed = age > 18; // anways returns boolean
```
### Multiple ‘?’
A sequence of question mark operators ? can return a value that depends on more than one condition.
```
    const prompt = require('prompt-sync')(); 
    let age = prompt('age?', 18);
    let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';
    console.log( message );
```
the same thing in if then notation
```
    if (age < 3) {
    message = 'Hi, baby!';
    } else if (age < 18) {
    message = 'Hello!';
    } else if (age < 100) {
    message = 'Greetings!';
    } else {
    message = 'What an unusual age!';
    }
```
### Non-traditional use of ‘?’ : Conditional Computation
```
    const prompt = require('prompt-sync')(); 
    let company = prompt('Which company created JavaScript?',   '');
    (company == 'Netscape') ?
    console.log('Right!') : console.log('Wrong.');
```
using if then notation
```
    const prompt = require('prompt-sync')(); 
    let company = prompt('Which company created JavaScript?',   '');
    
    if (company == 'Netscape') {
      console.log('Right!');
    } else {
      console.log('Wrong.');
    }
```
---
## simple exercise
1. show sign: write a program that takes user input and saves to a variable  called number and prints to the terminal positive or negative based on the sign.  write it both ways using if then notation and ? notation
2. even or odd: write a prgram that takes user input and saves to a variable called number and prints to the terminal if the number is even or odd.  write it both ways using if then notation and ? notation
3. check uppercase: write a prgram that takes user input and saves to a variable called string.  check to see if there are any uppercase letters in the string.  print to the terminal if there true if all the letters are lower case and false if there are upper case letters.
## harder problems
4. write a program that takes takes a,b,c,d,e polynomial in the form ax^4 +bx^3 + cx^2 + dx + e and solves the roots of the polynomial. this is done by guessing a range and checking if the range crosses zero.  if it does then you can reduce the range until a small enough range is found. then guess the average.
--- 
## Cheat sheet Construction
- write a cheat sheet of everything learned in this section
---