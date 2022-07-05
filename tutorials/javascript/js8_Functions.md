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

