# 

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
10. js6
---
## setup
---
## introduction
---
## demonstration
---
## Tutorial
### The “while” loop
While the condition is truthy, the code from the loop body is executed.
```
    while (condition) {
  // code
  // so-called "loop body"
    }
```
example 
```
    let i = 0;
    while (i < 3) { // shows 0,     then 1, then 2
      console.log( i );
      i++;
    }
```
### The “do…while” loop
The condition check can be moved below the loop body using the do..while syntax:
```
    do {
      // loop body
    } while (condition);
```
example
```
    let i = 0;
    do {
      console.log( i );
      i++;
    } while (i < 3);
```
### The “for” loop
syntax
```
    for (begin; condition; step) {
      // ... loop body ...
    }
```
example
```
    for (let i = 0; i < 3; i++) { / / shows 0, then 1, then 2
      console.log(i);
    }
```
explination:
- begin executes once
- if the condition is met
- the body will execute in      iterative steps
### skipping parts
We can omit begin if we don’t need to do anything at the loop start.
```
    let i = 0; // we have i already     declared and assigned
    for (; i < 3; i++) { // no need     for "begin"
      console.log( i ); // 0, 1, 2
    }
```
remove step
```
    let i = 0;
    
    for (; i < 3;) {
      console.log( i++ );
    }
```
infinate loop
```
    for (;;) {
      // repeats without limits
    }
```
### breaking the loop
```
    for (;;) {
      break; // breaks on first iteration
    }
```
### continue to next iteration
```
    let i = 0;
    for (;;) {
      if (i == 1){
          console.log('special iteration');
          i++;
          continue;
        }
      console.log('iteration'+i)
      if (i == 4){break}
      i++;
    }
```
### Labels for break/continue
A label is an identifier with a colon before a loop:
```
    labelName: for (...) {
      ...
    }
```
The break <labelName> statement in the loop below breaks out to the label.  it is used for nested loops.
```
  const prompt = require('prompt-sync')();  
  outer: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let input = prompt(`Value at  coords (${i},${j})`, '');
      if (!input) break outer; // (*)
    };
  };
  console.log('Done!');
```
we can also use the following syntax
```
  outer:
  for (let i = 0; i < 3; i++) { ... }
```
### The "switch" statement
A switch statement can replace multiple if checks. 
- syntax
```
    switch(x) {
    case 'value1':  // if (x ===  'value1')
      ...
      [break]

    case 'value2':  // if (x ===  'value2')
      ...
      [break]

    default:
      ...
      [break]
  }
```
- The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
- If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
- If no case is matched then the default code is executed (if it exists).

---
## simple exercise
1. guess what the last value of the following code snippet is, evaluate in node
  ```
    let i = 3;

    while (i) {
    console.log( i-- );
    }
  ```
2. loop through all even numbers from 1 to 10
3. loop through all numbers divisible by 3 and less than 100
## harder problems
- An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself. In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n. For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4. Write the code which outputs prime numbers in the interval from 2 to n. For n = 10 the result will be 2,3,5,7. P.S. The code should work for any n, not be hard-tuned for any fixed value.

--- 
## Cheat sheet Construction
- write a cheat sheet of everything learned in this section
---