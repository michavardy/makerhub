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
---
## setup
---
## introduction
---
## demonstration
---
## Tutorial
### Basic operators, maths
- **operand** : *what operators are applied to*
  - example: 5*2, 
    - 5 and 2 are operands,
    - * is the operator
- **Unary** : *if an operator has a single operand*
- **Binary** : *an operator is binary if it has two operands*  

### Unary example
```
    let x = 1;

    x = -x;
    console.log( x ); // -1, unary negation was applied
```
### Binary example
```
    let x = 1, y = 3;
    console.log( y - x ); // 2, binary minus subtracts values
```
### Maths
The following math operations are supported:

- Addition +,
- Subtraction -,
- Multiplication *,
- Division /,
- Remainder %,
- Exponentiation **.

### Remainder %
The result of a % b is the remainder of the integer division of a by b.
```
    console.log( 5 % 2 ); // 1, a remainder of 5 divided by 2
    console.log( 8 % 3 ); // 2, a remainder of 8 divided by 3
```
### Exponentiation **
The exponentiation operator a ** b raises a to the power of b.
```
    console.log( 2 ** 2 ); // 2² = 4
    console.log( 2 ** 3 ); // 2³ = 8
    console.log( 2 ** 4 ); // 2⁴ = 16
    console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
    console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```
### String concatenation with binary +
 if the binary + is applied to strings, it merges (concatenates) them:
 ```
    let s = "my" + "string";
    console.log(s); // mystring
    console.log( '1' + 2 ); // "12"
    console.log( 2 + '1' ); // "21"
    console.log(2 + 2 + '1' ); // "41" and not "221"
    console.log('1' + 2 + 2); // "122" and not "14"
    console.log( 6 - '2' ); // 4, converts '2' to a number
    console.log( '6' / '2' ); // 3, converts both operands to numbers
 ```
### Numeric conversion, unary +
 Unary + operator works the same as Number(...) operator.  it recasts the type into number.

### assignment returns a value
 The call x = value writes the value into x and then returns it.

### Chaining assignments
 ```
    let a, b, c;

    a = b = c = 4;
    console.log(a,b,c) // 4 4 4
 ```
### Modify in place
We often need to apply an operator to a variable and store the new result in that same variable. This notation can be shortened using the operators += and *=:
- **Modify  Notation**
```
    let n = 2;
    n = n + 5;
    n = n * 2;
```
- **Short  Notation**
```
    let n = 2;
    n += 5; // now n = 7 (same as n = n + 5)
    n *= 2; // now n = 14 (same as  n = n * 2)

    console.log( n ); // 14
```
### Increment/decrement **Important** 
- Increment ++ increases a variable by 1:
- Decrement -- decreases a variable by 1:
- The operators ++ and -- can be placed either before or after a variable.

```
    let counter = 2;
    counter++; // works the  same as counter = counter + 1, but is shorter
    console.log( counter ); // 3
```
```
    let counter = 2;
    counter++; // works the  same as counter = counter + 1, but is shorter
    console.log( counter ); // 3
```
### bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation
Operators:
- AND ( & )
- OR ( | )
- XOR ( ^ )
- NOT ( ~ )
- LEFT SHIFT ( << )
- RIGHT SHIFT ( >> )
- ZERO-FILL RIGHT SHIFT ( >>> )

### Comma Operator
evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
```
    let a = (1 + 2, 3 + 4);
    
    console.log( a ); // 7 (the result of 3 + 4)
```
---
## simple exercise
1. Try and guess the evaluation of the following expressions.  Compare your guess to the node result. 
```
   "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    " \t \n" - 2 
```
2. Binomial expansion: write a program that defines x, y as variables.  calculate the binomial expansion of n=1,2,3,4 and print it to the screen. where the binomial expension is (x+y)^n
   https://en.wikipedia.org/wiki/Binomial_theorem 

3. Kinetic Energy: write a program that defines M, h, as mass and height respectivly.  calculate the one    dimensional velocity of this object if all of the potential energy has been converted to kinetic energy.  using  the following calculation.  E_k = 0.5 * M * V^2, E_p = M*g*h if g is the acceleration due to free fall using g = 10 m/s^2.  declare g as a const.  print out the velocity to the terminal.
4. Bitwise operators:  reference https://www.expii.com/t/base-binary-numbers-9192 as an explination of binary numbers.  ** this is an important assignment, we will probebly go over this one together**
write a program that defines a number num as a variable and prints the number as a binary number to terminal.  use bit shifting to print the number plus 1 as the num_plus_one and print to terminal.
   
---
## Cheat sheet Construction
- write a cheat sheet of everything learned in this section
---