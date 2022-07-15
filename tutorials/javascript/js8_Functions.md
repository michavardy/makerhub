## Functions

## syntax**
**keyword**:*function*
**function name**: *showMessage*
**code block**:{}
**function call**:*showMessage()*
**function variable**:*showMessage*
```
    function showMessage() {
    console.log( 'Hello everyone!' );
    }
    showMessage()
```
**parameers**: *name*
**arguments**:*micha*
```
    function showMessage(name) {
    console.log( `Hello ${name}!` );
    }
    showMessage('micha')
    showMessage('dana')
```
## local variables : function scope
- guess what this code block will do, 
- what will the last line do?
```
    function showMessage() {
      let message = "Hello, I'm JavaScript!"; 
      console.log( message );
    }
    showMessage(); 
    console.log( message );
```
## outer variables : global scope
- the global variable is accessible inside the function block
```
    let userName = 'John';
    function showMessage() {
      let message = 'Hello, ' + userName;
      console.log(message);
    }

    showMessage(); 
```
## outer variables : change global scope
- global variable accessible inside function scope
- global variable changable inside function scope
- global variable change accessible to global scope
```
    let userName = 'John';

    function showMessage() {
      userName = "Bob"; 
      let message = 'Hello, ' + userName;
      console.log(message);
    }
    console.log( userName ); 
    showMessage();
    console.log( userName ); 
```
## outer variables : global vs function scope
- function variable redeclared in function scope 
- doesn't change global scope

```
    let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName );
```
## Default Values
```
function showMessage(from, text = "no text given") {
  console.log( from + ": " + text );
  }

showMessage("Ann"); // Ann: no text given
```

## Default Function 
```
function anotherFunction(){
  return('arbitrary text')
}
function showMessage(from, text = anotherFunction()) {
  console.log( from + ": " + text );
}

showMessage("Ann"); 
```
## Returning a value
```
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);

console.log( result ); 
```

## Multiple return statements
``` 
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } 
    else {
      return false;
    }
  }

  let age = 18

  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  }
```
## Function Notes
- names should be verbs
examples:
```
showMessage(..)    
getAge(..)         
calcSum(..)        
createForm(..)      
checkPermission(..)
```
- unit function
a function should do 1 thing only

---
## simple exercise
1. guess what the output of this code snippet is, evaluate in node
```
  function a(name,desc=b()){
    console.log(name + "is" + desc)
  }
  function b(desc = "ok"){
    return(c(3) + desc)
  }
  function c(rep=2){
    let i = 0;
    var j = ""
    while (i < rep) { 
      j = j + "very "
      i++;
    }
    return(j)
  }

  a('Micha','happy')
  a('jon')
  b('bad')
  c(1)
```
## exercises
2. write a function: min(a,b) that takes two numbers and returns the minimum of the two
3. write a function isEven(a) that takes a number and returns true if its even
4. write a function isPrime(a) that takes a number and returns true if its a prime number

## hard exercise
5. write a function showKeywords(text, keyword) that takes a text string and returns all of the keywords in a keyword string  
``` 
showKeywords("simple text string" , "string") \\ expected output: "string"
showKeywords("harder text string with more words" , "string, with, words") \\ expected output: "string with words"
showKeywords("text with text that repeates text words strings" , "text string") \\ expected output: "text text text"
```