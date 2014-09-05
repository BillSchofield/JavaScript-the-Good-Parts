# HTML5GameTemplate & JavaScript: The Good Parts
## Purpose of this session
* Demonstrate principles and practices that allow ThoughtWorks to use JavaScript as a first class language.
* Describe JavaScript's differences (especially the good and bad parts)
* Show how the 'Functional Object Creation Pattern' allows us to better use healthy OO design patterns
* Introduce JS unit testing in Jasmine
* Practice these new concepts by writing a simple game

## JavaScript as a First Class Language
JavaScript was rapidly adopted as the language of web client behavior when Java Applets failed to be a viable solution. 
The vast major of web developers treat it as a second (or third) class citizen in their development ecosystem. Most 
code snippets do not incorporate good design. Many developers just Copy/Paste the JavaScript that they need without 
understanding it.

This approach worked well enough when we only wanted minor behavior in oyr web clients and the bit of behavior were 
largely independent and coupled only through the DOM. As we started building 'thick' web clients these practices weren't
sustainable, but they are how almost everyone was doing it and how most people are doing it today.

ThoughtWorks takes JS more seriously and we use the same rigor with it as we do with our 'server' languages. We initially 
use good software design practices, we unit test our code, and we refactor it.

## JavaScript: The Good Parts
We're just going to hit some of the high points of this book. There is a lot more to it and the time you spend reading 
carefully will be a good investment.

### JavaScript has some hideously Bad Parts
#### Programming model based on global variables
Use namespace objects to get out of the global namespace
``` javascript
var game = game || {};

game.runner = function(spec){
    ...
};
```
#### Scope: uses block scope syntax but variables are function scoped
Note that control blocks do not create a new scope. You can also reference variables before you declare them.
The book recommends declaring all of your variables at the top of each code block. This is safer but makes your code 
difficult to refactor than declaring and instantiation variables at the same time.

In practice, neither solution is a good solution.

Here's an example of what can go wrong if you don't declare variables at the top of the function.
``` javascript
var stuff = 'stuff';
function() {
 console.log(stuff); //outputs 'undefined'
 var stuff = 'other stuff';
 console.log(stuff); //outputs 'other stuff'
}
```

The first console.log outputs undefined because the var stuff in the function was _hoisted_ to the top of the function.

``` javascript
var stuff = 'stuff';
function() {
 var stuff; //has not been defined
 console.log(stuff);
 stuff = 'other stuff'; //defined here
 console.log(stuff);
}
```

#### Semi-colon insertion
It sometimes inserts semicolons in places where they are not welcome. Consider the consequences of semicolon insertion 
on the return statement. If a return statement returns a value, that value expression must begin on the same line as the 
return:
``` javascript
return
{
    status: true
};
```
This appears to return an object containing a status member. Unfortunately, semicolon insertion turns it into a 
statement that returns undefined.

Always, always, always use K&R style braces in JavaScript:
``` javascript
return {
    status: true
};
```

#### Phony arrays
Arrays are implemented as maps in JavaScript. This has huge performance implications.

#### Lots of falsy values
|Value | Type |
|------|------|
|0     |Number|
|NaN (not a number) |Number|
|'' (empty string) |String|
|false |Boolean|
|null  |Object |
|undefined|Undefined|

These values are all falsy, but they are not interchangeable. For example, this is the wrong way to determine if an 
object is missing a member:
``` javascript
value = myObject[name];
if (value == null) {
   alert(name + ' not found.');
}
```

#### == vs === (== coerces)
``` javascript
'' == '0'          // false
0 == ''            // true
0 == '0'           // true

false == 'false'   // false
false == '0'       // true

false == undefined // false
false == null      // false
null == undefined  // true

' \t\r\n ' == 0    // true
```
#### new (don't use it)
#### Instance variables and methods are public unless you use the Functional Object Creation Pattern

### We use JavaScript because: 
#### It's more or less mandatory for building modern Web Apps

#### It has many Beautiful Features:
* Functions as first class objects
* “Dynamic objects with prototypal inheritance”
* Powerful object literal notation

### Some important aspects of JavaScript:
#### Uses prototypical inheritance instead of class inheritance
> Excerpt From: Douglas Crockford. “JavaScript, The_Good_Parts"
> 
> JavaScript is a prototypal inheritance language. That means that objects can inherit properties directly from other objects. The language is class-free.
>
> If a function is invoked with the new prefix, then a new object will be created with a hidden link to the value of the function's prototype member, and this will be bound to that new object.”
> ```javascript
> // Create a constructor function called Quo.
> // It makes an object with a status property.
> 
> var Quo = function (string) {
>     this.status = string;
> };
> 
> // Give all instances of Quo a public method
> // called get_status.
> 
> Quo.prototype.get_status = function (  ) {
>     return this.status;
> };
> 
> // Make an instance of Quo.
> 
> var myQuo = new Quo("confused");
> 
> document.writeln(myQuo.get_status(  ));  // confused
> ```

#### Loose/weak Typing
> What do you expect these lines to display.
> ```javascript
> console.log(true + 5 + "10");
> console.log(true + "10");
> ```
> Type these into a JS console and see if you were right.

#### Duck Typing
If it walks like a duck and talks like a duck...
JavaScript doesn't care what type things are. It's happy to call a method on any object that has that method.

## Jasmine Unit Tests
This is a good intro & reference: http://jasmine.github.io/2.0/introduction.html

## What does the template code give you

HTML5 Boilerplate is a simple example of Test Driven game-like behavior
implemented in Javascript using a functional object creation pattern (as described in
'Javascript: the Good Parts, Chapter 5).

The sample contains examples of:
* Keyboard Input
* Mouse Input
* Polygon drawing
* Sprite drawing
* Simple object motion (using an Euler integrator)
