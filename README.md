## JavaScript crash course

### Exercises for Monday, May 1, 2017: 

#### Try to do the problems in the short_exercises.js file first. If you finish those, try the more challenging Problem1 and Problem2. 

If you even attempt these exercises, please save your work and push it to your Github account. 

#### Problem 1: 

*Directions:*

Your job is to implement a function called `filterForEvens()` that takes an 
array of integers as the argument (input) and returns (outputs) a new array with only the even numbers. 

I started the function for you; you just need to fill in some parts: 

##### PLEASE COMPLETE THE FUNCTION IN THE FILE 'problem1.js'
```javascript
function filterForEvens (arrayOfIntegers) {
    var arrayOfEvens = []; //declare empty array 
    
    arrayOfIntegers.forEach(function(integer) {
        //1. Fill in the rest of this function. 
    }); 
    
    return arrayOfEvens; 
}
```

Two examples of the completed function in action: 
    
1/
```javascript
filterForEvens([1,2,3,4,5,6]) // [2,4,6]
```
2/
```javascript
var someNumbers = [3,5,6,7,8,10,15,20]; 
filterForEvens(someNumbers) // [6,8,10,20]
```

*Some hints:*

1) You'll need to use an array method (a function that works on arrays) that
you haven't seen before: `arr.push(item)`

   You use .push() to add new items to the end of the array it's used on. 

   So here's how you use it. If you have an array of strings `var states = ['New Jersey', 'New York', 'Connecticut']` and you want to add 
'California' to the end of the array, you can say: 

    `states.push('California');`

   If you check the states array now, it should look like: `['New Jersey', 'New York', 'Connecticut', 'California']`

   Think about what values you'll need to push (or add) and what array you're adding to. Read the function that I started for you carefully. 
   
2) Remember, you're using `arr.forEach()` on your input. Here's a reminder of 
how .forEach() works on the array. forEach() takes a function as an argument, and then 
this function is applied to each of the items in the array. 

So for example: 
```javascript
[2,4,6,8,10].forEach(function(number) {
    console.log(number/2); 
}); 
```
would print out the numbers 1 2 3 4 and 5 in the console. 

The 'number' parameter in the function `...function(number) {...`
is simply a placeholder reference to each item in the array. You can use whatever placeholder name you want, but whatever you use, this is the name
you use to reference that value or item in the function body. In our case, it's just the one line `console.log(number/2)`. That's why we get an output of 5 numbers that's
half the value of the 5 numbers in the original array. 


3) You'll need to use an `if (...)` statement somewhere, since you're testing for whether a number is even or not. 

4) You'll need to use a `===` operator somewhere. Think about how to test if a number is an even integer or not. 

    
#### Problem 2: 

*Directions:*

Your job is to implement a function called `isValidCreditCardNumber()` that takes a string of digits and determines 
whether or not the string is a valid Mastercard, Visa, or AMEX credit card. 

This is a common problem in apps in general: users will input some information, and our app has to make sure the input is
a reasonable value. This is known as input validation. 

Obviously, in real life, the validation of a CC number is considerably more complicated than what this function needs to do, but this exercise is meant to 
give you a taste of how the tools you learned on Wednesday can be applied to testing whether an input is valid. 

I started the function for you; you just need to fill in some parts: 
```javascript
function isValidCreditCardNumber (cardNumber) {
    //1. How do you get the first 2 characters of a string? Replace the 'REPLACE WITH SOMETHING...' part.
    var first2Digits = REPLACE WITH SOMETHING...; 
    
    //2. How do you get the length of a string? Replace the 'REPLACE WITH SOMETHING...' part with some code. 
    var numberOfDigits = REPLACE WITH SOMETHING...; 

    //We only take Mastercard, Visa, and AMEX cards...
    var validFirst2Digits = ['40','41','42','43','44','45','46','47','48','49','51','52','53','54','55','34','37']; 
    
    
    if(/* 3. test for if cardNumber has 16 characters AND the first 2 characters are one of the valid first 2 digits of a credit card */) {
        return true; 
    } else {
        throw new Error("credit card number is invalid"); 
    }
}
```

##### PLEASE COMPLETE THE FUNCTION IN THE FILE 'problem2.js'

A few examples of the completed function in action: 
    
1/
```javascript
isValidCreditCardNumber("4359009288394736") // true -- has 16 numbers and the first two numbers are valid
```
2/
```javascript
isValidCreditCardNumber("0059009288394736") // results in an error being thrown, since first two numbers are not in the validFirst2Digits array. 
```
3/
```javascript
isValidCreditCardNumber("691096933940") // also invalid, since number of digits is wrong
```

*Some hints:*

1) For Part 1, you need to figure out how to extract and store the first two characters (digits) of the input string into the variable `first2Digits`. 
Strings have a .substring method that's used like this: `"Eric".substring(1,3); // "ri"`

   Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

2) For Part 2, simply find the number of characters in the string (we saw this in class, but Google if you forgot)

3) Part 3 is a little trickier. Here, you have to test for two conditions: 

   *a)* Whether or not the input string is 16 characters 
   
   AND
   
   *b)* Whether or not the first two characters matches one of the valid combo of digits that's stored inside the array `validFirst2Digits`
   
    Part 3b requires you to take your input string's first two digits (now stored in the variable `first2Digits` if you finished Part 1 correctly)
    and see if there's a match with an item inside `validFirst2Digits`. **There are several ways to do this. WE HAVEN'T DONE THIS EXPLICITLY IN CLASS, BUT I EXPECT YOU TO TRY TO FIND OUT HOW USING GOOGLE/RESEARCH.** 
    
    You'll probably need to use the `===` operator to compare two values. Finally, remember: You're testing whether both conditions are true, and that requires the joining together of two conditionals and you need to use another of the logicial operators we saw briefly in class in order to do that.
    (i.e. both conditions need to be true for the card number to be valid)

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
//For more info, search for JS classes/constructors and prototypes. Caution: this can be quite confusing at first. Try to master the object literal first. 
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