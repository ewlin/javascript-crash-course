## JavaScript crash course

### Reading for Class 6 & 7: 
[A History of JavaScript](https://auth0.com/blog/a-brief-history-of-javascript/)

### Comments
In JavaScript, a line that starts with `//` is a comment. This doesn't get evaluated as code. 

### Primitives (basic values)
#### There are a few basic types of values you can have in JS: 
##### *Strings*: Any combination of text (text must be inside either "" or '')
```javascript
"Course: Coding for Managers"
"2017"
"April 26, 2017"
"Today is Wednesday, April 26, 2017"
"My name is Eric."
```
##### *Numbers*: Integers, Decimal values etc. (For doing mathematical operations)
```javascript
5
5.5
10000000
3.1415926535
```
###### You can manipulate strings and numbers with some basic 'operators': 
###### Concatenate (join) strings together with `+`:
```javascript
"Hello: My name is " + "Eric." // "Hello: My name is Eric."
```
###### Usual things with math operators `+ - /` etc.:
```javascript
5 + 5
6 - 1
9 * 9 
//Modulo (Remainder from your elementary school math class)
10 % 5 // 0 
15 % 6 // 3
10 % 3 // 1
```

### Variable
You can store a value in a variable. Think of the variable as a container with a label. 

```javascript
var thisIsAVariable; //empty container with a label "thisIsAVariable"
thisIsAVariable = "Eric"; //assigning the variable with a value; 

//Shorthand
var thisIsAnotherVariable = 1000; 
```

If you now ask for the variable `thisIsAVariable`, you'll get the value! `thisIsAVariable // "Eric"`
    
You can store any type of value in a variable. Remember: so far, we've only seen two types of values: numbers and strings




### Logic

##### *Boolean* (true or false)
```javascript
true 
false 
```
###### Examples 
```javascript
var five = 5; 
five === 5 // true (=== strict equality. Compares two values to see if they're equal)
five === 6 // false 
five > 4 // true 
five < 3 // false 
```

###### More logic operators: 
```javascript
true && false // AND operator. This examples is false (both values need to be true)
true || false // OR operator. This example is true, since at least one of the two values are true
true && true && (1 === 2) //false 
false || false || (1 === 1) // true
```
#### Some JS code: 
```javascript
var num = 5; 

if (num < 10) {
    alert(num + " is less than 10!"); 
}
```

#### *Function*
##### Wrap the above in reusable code! (AKA a function)
Function declarations need a `function` keyword, followed by the name of the function, (placeholder parameters inside quotation marks), and then the body of the function wrapped by 2 {} (Curly braces) 

Functions that return an output need a `return` statement at the end of the function body. Not all functions need to return a value/output. 
```javascript
function lessThan10(num) {
    if (num < 10) {
        alert(num + " is less than 10!")
    } else {
        alert(num + " is NOT less than 10!")
    }
} 
```
#### Call the function (AKA use the function)
```javascript 
lessThan10(5)

lessThan10(25)

```


### *Objects* and more complicated types (composite)

#### *Array* (a collection of values)
```javascript
var anArrayOfNumbers = [1, 3, 5, 7]; 
///To access a particular item or value from the array: 
arrayName[index]; 
///In our `anArrayOfNumbers`, to access the first value: 
anArrayOfNumbers[0]; 
///For the last item: 
anArrayOfNumbers[anArrayOfNumbers.length - 1]; 
///Or, with a more readable format: 
var lastItemIndex = anArrayOfNumbers.length - 1; 
anArrayOfNumbers[lastItemIndex]; 
```

#### *Object* (a collection of values with an associated key. Think of this as a dictionary entry. The word is the key, and the value is the definition)
```javascript
//Object literal (JavaScript allows you to create objects like this. There are also ways to create objects with a 'factory'. Think of this as a blueprint for objects of the same kind.)
var objectFormat = {
    key1 : value1, 
    key2 : value2, 
    //and so on...
}; 

var meAndMyself = {
    name: "Eric L.",
    birthday: "April 7",
    eyeColor: "brown",
    gender: "m",
    over18: true,
}; 


//You can also store functions in a variable. A function is also just a value
var printBio = function(person) {
    var pronoun; 
    
    if (person.gender === "m") {
        pronoun = "He"; 
    } else if (person.gender === "f") {
        pronoun = "She"; 
    }
    
    alert(person.name + " was born on " + person.birthday + ". " + pronoun + " has " + person.eyeColor + " eyes.");
}; 

printBio(meAndMyself); 
```

Accessing object values. You have two options: 

```javascript
var object = {
    key1: "value1", 
    key2: 2
}
```

You can use square brackets (like using an index in arrays)
*BUT...The key must be in string form.*
```javascript
object["key1"]; // "value1"
```
*Or you can use DOT notation*
```javascript
object.key2; // 2
```
#### *Methods*
##### Methods are functions that are associated with an object
In methods, the `this` keyword refers to the object itself. 

Same example from earlier: 
```javascript
var eric = {
    name: "Eric L.",
    birthday: "April 7",
    eyeColor: "brown",
    gender: "m",
    over18: true,
    printBio: function() {
        var pronoun; 
    
        if (this.gender === "m") {
            pronoun = "He"; 
        } else if (this.gender === "f") {
            pronoun = "She"; 
        }
    
        alert(this.name + " was born on " + this.birthday + ". " + pronoun + " has " + this.eyeColor + " eyes.");
    }
}; 

//To call the method: 
eric.printBio(); 

//Alternatively, you can also do this: 
eric["printBio"](); 


```