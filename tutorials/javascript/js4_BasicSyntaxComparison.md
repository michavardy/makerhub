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
---
## setup
---
## introduction
---
## demonstration
---
## Tutorial
### Comparison
- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
- Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
### boolean as a result
All comparison operators return a boolean value:
```
    console.log( 2 > 1 );  // true (correct)
    console.log( 2 == 1 ); // false (wrong)
    console.log( 2 != 1 ); // true (correct)
```
### string comparison
To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.  In other words, strings are compared letter-by-letter.
```
    console.log( 'Z' > 'A' ); // true
    console.log( 'Glow' > 'Glee' ); // true
    console.log( 'Bee' > 'Be' ); // true
```
### string comparison algorithem
- Compare the first character of both strings.
 - If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
- Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
- Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
### Comparison of different types
When comparing values of different types, JavaScript converts the values to numbers.
For boolean values, true becomes 1 and false becomes 0.
```
    console.log( '2' > 1 ); // true, string '2' becomes a number 2
    console.log( '01' == 1 ); // true, string '01' becomes a number 1
    console.log( true == 1 ); // true
    console.log( false == 0 ); // true
```
### Strict equality
A strict equality operator === checks the equality without type conversion.
```
    console.log( 0 == false ); // true
    console.log( '' == false ); // true
    console.log( 0 === false ); // false, because the types are different
    console.log( '' === false ); // false, because the types are different
```
### equality with null and undefined
for non strict equality

```
    console.log( null === undefined ); // false
    console.log( null == undefined ); // true
```
### comparison with null
- null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN
- this only applies to comparison operators and not identity check operator ==
```
    console.log( null > 0 );  // (1) false
    console.log( null == 0 ); // (2) false
    console.log( null >= 0 ); // (3) true
```

---
## simple exercise
1. guess if the following comparisons are true or false, evaluate using node
   - 'z' > 'ab'
   - 'abc' <= 'abC'
   - '2' < '12'
   - undefined == null
   - undefined === null
   - null == "\n0\n"
   - null === +"\n0\n"
--- 
## Cheat sheet Construction
- write a cheat sheet of everything learned in this section
---