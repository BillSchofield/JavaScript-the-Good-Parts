# HTML5GameTemplate & JavaScript: The Good Parts
## Purpose of the lesson
* Demonstrate principles and practices that allow ThoughtWorks to use JavaScript as a first class language.
* Describe JavaScript's differences (especially the good and bad parts)
* Show how the 'Functional Object Creation Pattern' allows us to better use healthy OO design patterns
* Introduce JS unit testing in Jasmine
* Practice these new concepts by writing a simple game

## JavaScript as a First Class Language
* JavaScript was rapidly adopted as the language of web client behavior when Java Applets failed to be a viable solution.
* The vast major of web developers treat it as a second (or third) class citizen in their development ecosystem. Most 
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
#### Scope: uses block scope syntax but not block scope
#### Semi-colon insertion
#### Phony arrays
#### Lots of falsy values
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


## Jasmine Unit Tests

## What does the template code give you

HTML5 Boilerplate is a simple example of Test Driven game-like behavior
implemented in Javascript using a functional object creation model (as described in
'Javascript: the Good Parts, Chapter 5).

The sample contains examples of:
* Keyboard Input
* Mouse Input
* Polygon drawing
* Sprite drawing
* Simple object motion (using an Euler integrator)
