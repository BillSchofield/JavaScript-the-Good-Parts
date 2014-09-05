# HTML5GameTemplate

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

## Jasmine Unit Tests

## JavaScript: the Good Parts

### Key Points from the Book

#### JavaScript has some hideously Bad Parts
* Programming model based on global variables

#### We use JavaScript because: 
* It's more or less mandatory for building modern Web Apps
* It has delightfully Good Parts:
    * Functions as first class objects
    * Powerful object literal notation


### Some important aspects of JavaScript:
* Uses prototypical inheritance instead of class inheritance
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

* Loose/weak Typing
> What do you expect these lines to display.
> ```javascript
> console.log(true + 5 + "10");
> console.log(true + "10");
> ```
> Type these into a JS console and see if you were right.

* Duck Typing
