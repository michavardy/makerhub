# IDE Tutorial

## table of contents
1. description
2. pre-req
3. setup
4. introduction
---
## description
JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.  Over 97% of websites use JavaScript on the client side for web page behavior. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.

JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.
---
## pre-req
1. os
2. git
3. IDE
4. markdown
---
## setup
1. download and install node.js https://nodejs.org/en/download/ 
---
## introduction
---
## demonstration
---
## Tutorial
Note: all one line examples should be tried in node in the terminal
### hello world
1. open up vs code
2. fork makerhub and open up /Makerhub/projects/javascript (if you already havn't)
3. add a directory with your name on it, refered to as js directory
4. add a file in js directory called helloworld.js
5. type console.log('hello world')
6. open up a terminal and open js directory in terminal
7. type node helloworld.js into terminal and press enter
8. verify that you printed hello world to terminal
### basic syntax
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
### basic syntax 2
1. open up vs code
2. open your js directory 
3. add a file called basicSyntax2.js
4. copy paste the following code:
```
    // How to create variables:
    var x;
    let y;
    
    // How to use variables:
    x = 5;
    y = 6;
    let z = x + y;
    console.log(x ,' + ' ,y , ' = ', z)  
```
5. type node basicSyntax2.js into terminal to run this program
#### Notes
- The JavaScript syntax defines two types of values:
    - Fixed values: Fixed values are called Literals.
    - Variable values: Variable values are called Variables.
- JavaScript Literals
  - numbers
    - examples: 10.5, 1001
  - strings:
    - "john doe"
    - 'john doe'
- JavaScript Variables
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
    - '+'
    - '-'
    - '*'
    - '/'
    - '='
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
##### **convention **
we will fully define our convention in the README
### basic syntax 3
#### Notes
##### what is the difference between the following
###### var
```
    var x = 5;
    var y = 6;
    var z = x + y;
```
###### let
```
    let x = 5;
    let y = 6;
    let z = x + y;
```
###### const
```
    const x = 5;
    const y = 6;
    const z = x + y;
```
###### undeclared
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
#### Assignment Operator
##### incrementation
```
    let x;
    x = 2;
    x = x + 5;
```
##### multi-assignment
```
    let person = "peppa pig", color = 'pink', age = 6;
```
##### multi-line assignment
```
    let person = "John Doe",
    carName = "Volvo",
    price = 200;
```
##### value = undefined
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
##### JavaScript Arithmetic
###### numbers
```
    let x = 5 + 2 + 3; \\ the value of x is 10
```
###### strings
```
    let x = "John" + " " + "Doe"; \\  the value of x is John  Doe
```
###### mixed numbers and strings
```
    let x = "5" + 2 + 3; \\  the value of x is '523'
    let y =  2 + 3 + "5"; \\  the value of y is '55'
```
### basic syntax 4: let / block scope
---
## simple exercise
---
## Cheat sheet Construction
---
