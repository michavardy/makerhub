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